<p align=center>
  <img src="docs/assets/img/android-chrome-384x384.png" width=150>
  <h1 align=center><a href="https://filcnaplo.hu">Weboldal</a></h1>
</p>

### A Filc Napló weboldalának kódja

# Filc API

### Base: `https://filcnaplo.hu/v2`

## Schools API

**GET** `/school_list.json`

Example response:

```json
[
  {
    "instituteCode": "example",
    "name": "Example School",
    "city": "Budapest"
  }
]
```

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

## Supporters API

**GET** `/supporters.json`

Example response:

```json
{
  "progress": {
    "value": 50,
    "max": 100
  },
  "top": [
    {
      "name": "example",
      "amount": "$50",
      "platform": "donate"
    }
  ],
  "all": [
    {
      "name": "example 2",
      "amount": "$5",
      "platform": "patreon"
    },
  ]
}
```
