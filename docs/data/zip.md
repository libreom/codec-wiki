---
label: ZIP
sidebar_position: 1
---

# ZIP

:::caution Pending Review
The content in this entry may not be entirely accurate, & is pending further review to assess the quality of the information.
:::

ZIP is an archive file format that supports lossless data compression. A ZIP file may contain one or more files or directories that may have been compressed using any one of a number of different algorithms present in the ZIP specification. The most common algorithm used in ZIP is DEFLATE, which is also used in [gzip](../data/gzip.md) & [PNG](../images/PNG.md).

Deflate acts as a combination of LZ77 lossless coding & Huffman coding, where it can first use LZ77 to find patterns in the data & reduce redundancy. This is followed by using Huffman coding to assign smaller bit values to patterns found more frequently by LZ77.

Additionally, files in a ZIP archive are compressed individually so it is possible to extract existing files or add new ones without applying compression or decompression to the entire archive.

ZIP is noteworthy for its nearly universal compatibility. "Traditional ZIP" (compression method 8 in the ZIP specification) limits the size of compressed archives to 4 GB, though most ZIP compressors use Deflate64(tm) (compression level 9 in the ZIP specification) to bypass this limitation. ZIP is competitive with [gzip](../data/gzip.md) and has been succeeded many times by formats & algorithms such as [bzip2](../data/bzip2.md), [XZ](../data/xz.md), [7-zip](../data/7z.md), [brotli](../data/brotli.md) (to a degree), and [Zstandard](../data/zstd.md).

## Format Breakdown

DEFLATE is an LZ77-based compressor that finds repeated sequences of bytes in the input data and replaces them with shorter references to previous occurrences. It also uses Huffman coding to encode the symbols with variable-length codes based on how frequently they occur. DEFLATE has two modes for each block of compressed data: These are specified as either "static" or "dynamic" Huffman compressed blocks. In static mode, the Huffman codes are fixed and predefined. In dynamic mode, the Huffman codes are generated dynamically & transmitted along with the compressed data.

ZIP files have a specific structure that consists of four main file header components: local file headers, central directory file headers, end of central directory record, and data descriptors. The local file headers store information about each compressed file, such as its name, size, CRC-32 checksum, compression method, and optional extra fields. The central directory file headers store similar information as the local file headers, but also include the offset of each local file header in the ZIP file. The end of central directory record marks the end of the ZIP file and contains information about the number and size of the central directory file headers. The data descriptors are optional and store additional information about the compressed data, such as its CRC-32 checksum, uncompressed size, & compressed size.

ZIP files can also support other compression methods, such as Deflate64(tm), BZIP2, LZMA, & [Zstandard](../data/zstd.md). These methods are not widely supported by most ZIP utilities and may cause compatibility issues. ZIP files can also contain uncompressed data. The format also supports encryption to protect the data from unauthorized access. There are two types of encryption supported by ZIP: traditional ZipCrypto encryption and strong encryption. ZipCrypto encryption is considered insecure, while stronger encryption in ZIP uses more resilient algorithms albiet spread across a number of standards. Because of this, strong encryption is not standardized and may cause compatibility issues.

ZIP files can reduce the size of files and folders by more efficiently representing redundant data. They can also combine multiple files and folders into a single archive that can be easily transferred or stored. You will not find a more popular implementation than ZIP for general data compression purposes like these. ZIP files can also preserve the metadata of the original files, such as their names, paths, dates, and attributes. However, ZIP files also have some limitations and concerns. For example, traditional ZIP files (that aren't ZIP64) have a maximum size of 4 gigabytes for each compressed file and 65,535 entries for each archive. Most ZIP implementations do not support symbolic links or hard links within the archive.

Additionally, ZIP can be encoded in a number of different ways. Apple has a default "Compress" option in Finder that compresses selected files into a ZIP file, and many Linux desktops offer GUI functionality for creating ZIP files easily as well. It is common to compress to ZIP on Windows using the 7-zip data compression & decompression utility (not to be confused with the [7-zip compression format](../data/7z.md), though the two are related).

## Encoding

#### Linux & macOS

To encode to a ZIP file most efficiently on Linux or macOS, it is worth using the 7-zip implementation of DEFLATE for ZIP compression. The 7zip website's homepage claims: "For ZIP and GZIP formats, 7-Zip provides a compression ratio that is 2-10 % better than the ratio provided by PKZip and WinZip." You can use the highly flexible 7-zip CLI utility through binaries available on [7-zip's Download page](https://www.7-zip.org/download.html). Here are some direct download links: [Linux x86_64](https://www.7-zip.org/a/7z2301-linux-x64.tar.xz) | [macOS Universal](https://www.7-zip.org/a/7z2301-mac.tar.xz)

Once you've downloaded the utility, remember whether you are choosing to use the `7zz` binary or the static `7zzs` binary. Commands run using `7zz` should run using `7zzs` as well, so please replace `7zz` in our examples as appropriate if you choose not to use it. Additionally, please copy your choice of binary to your `/usr/local/bin` if you want to be able to use it everywhere.

- To encode a ZIP file at the lowest effort setting using one thread:
```bash
7zz a -bso0 -tzip -mmt1 -mx1 "Output.zip" "Input"
```

- To encode a ZIP file at the highest effort setting using eight threads:
```bash
7zz a -bso0 -tzip -mmt8 -mx9 "Output.zip" "Input"
```

#### Windows

To be filled.

## Conclusion

The only real benefit of using ZIP over more modern formats currently is compatibility. It may be viable when compared to 7z & XZ due to a reduction in complexity that improves encode & decode speed, but Zstandard is incredibly performant in both of these areas and generally outperforms ZIP. When it comes to content delivery on the Web, Brotli has been adopted across all modern web browsers and offers a better alternative to older compression technologies used on the Web that resemble ZIP.