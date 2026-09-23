migrate((app) => {
  const settings = app.settings();
  settings.meta.appName = "Tinynote";
  app.save(settings);
});
