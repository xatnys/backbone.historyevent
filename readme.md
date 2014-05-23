# backbone.historyevent

This simple backbone plugin modifies the checkUrl method of Backbone.History to trigger an event which emits an objects containing the current and next routes.

## Usage

```
# in a view
this.listenTo(Backbone.history, 'url:change', callback)
```
