import Config

config :plausible, PlausibleWeb.Endpoint,
  cache_static_manifest: "priv/static/cache_manifest.json",
  check_origin: false,
  server: true,
  code_reloader: false

config :tzdata,
       :data_dir,
       "/app/storage"