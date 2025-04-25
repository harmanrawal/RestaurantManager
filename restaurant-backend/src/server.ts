import { setupApp } from './app';

const PORT = process.env.PORT || 4000;

setupApp().then((app) => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
