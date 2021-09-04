<p align=center>
  <img src="docs/assets/img/android-chrome-384x384.png" width=150>
  <h1 align=center><a href="https://filcnaplo.hu">Weboldal</a></h1>
</p>

### A Filc Napló weboldalának kódja

# Filc API

### Base: `https://filcnaplo.hu/v2`

## News API

**GET** `/news.json`

Example response:

```json
[
  {
    "title": "Example",
    "content": "This is an example news.",
    "link": "https://example.com/",
    "open_label": "install",
    "platform": "android|ios|linux|windows|macos",
    "emergency": true
  }
]
```
