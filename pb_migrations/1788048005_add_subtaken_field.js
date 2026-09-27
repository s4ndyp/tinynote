migrate(
  (app) => {
    const todos = app.findCollectionByNameOrId("todos");
    todos.fields.add(
      new JSONField({
        name: "subtaken",
        maxSize: 200000,
      })
    );
    app.save(todos);
  },
  (app) => {
    const todos = app.findCollectionByNameOrId("todos");
    todos.fields.removeByName("subtaken");
    app.save(todos);
  }
);
