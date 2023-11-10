---
label: FLAC
sidebar_position: 7
---

# FLAC

:::warning Help Wanted
This section is in need of contributions. If you believe you can help, please see our [Contribution Guide](../contribution-guide.md) to get started as a contributor!
:::

FLAC (Free Lossless Audio Coding) is an open-source lossless audio codec with widespread support & compatibility released in 2001. It represents the most efficent lossless audio format in common use today.

FLAC is commonly contained in a ogg container with either a `.flac` or `.ogg` extension. It can less commonly be used within a matroska container (`.mkv` or `.mka`) for mixing with a video stream.

## Software support
FLAC is supported by the majority of web browsers and media players in common use as of 2023.

### WAV to FLAC using [FFmpeg](../utilities/ffmpeg.md):

```bash
ffmpeg -i example.wav -c:a flac example.flac
```

### WAV to FLAC using FLAC command-line tool:
You can include an argument of a number 0-8 to specify the compression effort, 0 being fastest and 8 having the highest compression.
```bash
flac example.wav -8 -o example.flac
```