# @kozmoai/plugin-signals-node

Welcome to the Node.js library package for the signals plugin!

Signals plugin allows backend plugins to publish messages to frontend plugins.

## Getting started

Add SignalService to your plugin environment in `packages/backend/src/types.ts`:

```ts
import { SignalService } from '@kozmoai/plugin-signals-node';

export type PluginEnvironment = {
  // ...
  signalService: SignalService;
};
```

Add it also to your `makeCreateEnv` to allow access from the other plugins:

```ts
import { SignalService } from '@kozmoai/plugin-signals-node';
import { DefaultEventBroker } from '@kozmoai/plugin-events-backend';

function makeCreateEnv(config: Config) {
  // ...

  const eventBroker = new DefaultEventBroker(root.child({ type: 'plugin' }));
  const signalService = DefaultSignalService.create({
    eventBroker,
  });

  return (plugin: string): PluginEnvironment => {
    const logger = root.child({ type: 'plugin', plugin });
    return {
      logger,
      eventBroker,
      signalService,
      // ...
    };
  };
}
```

To allow connections from the frontend, you should also install the `@kozmoai/plugin-signals-backend`.

## Using the service

Once you have both of the backend plugins installed, you can utilize the signal service by calling the
`publish` method. This will publish the message to all subscribers in the frontend. To send message to
all subscribers, you can use `null` as `recipients` parameter.

```ts
// Periodic sending example
setInterval(async () => {
  await signalService.publish({
    recipients: null,
    channel: 'my_plugin',
    message: {
      message: 'hello world',
    },
  });
}, 5000);
```

To receive this message in the frontend, check the documentation of `@kozmoai/plugin-signals` and
`@kozmoai/plugin-signals-react`.

## Using event broker directly

Other way to send signals is to utilize the `EventBroker` directly. This requires that the payload is correct for it
to work:

```ts
eventBroker.publish({
  topic: 'signals',
  eventPayload: {
    recipients: ['user:default/user1'],
    message: {
      message: 'hello world',
    },
    channel: 'my_plugin',
  },
});
```