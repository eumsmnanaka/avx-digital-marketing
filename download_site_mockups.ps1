$urls = @{
    "restaurant-desktop" = "https://i.ibb.co/9HxBKqN/restaurant-desktop.jpg"
    "restaurant-mobile" = "https://i.ibb.co/1nKwjLY/restaurant-mobile.jpg"
    "clinic-desktop" = "https://i.ibb.co/zRZjmqR/clinic-desktop.jpg"
    "clinic-mobile" = "https://i.ibb.co/tHBBJSF/clinic-mobile.jpg"
    "language-desktop" = "https://i.ibb.co/Ld6Lhxf/language-desktop.jpg"
    "language-mobile" = "https://i.ibb.co/7rKvHBK/language-mobile.jpg"
    "ecommerce-desktop" = "https://i.ibb.co/KxwBqnN/ecommerce-desktop.jpg"
    "ecommerce-mobile" = "https://i.ibb.co/mHRVHqD/ecommerce-mobile.jpg"
}

$outputDir = "c:/Users/julli/joabe teste/avx-digital-marketing/public/site-mockups"

if (!(Test-Path -Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}

foreach ($key in $urls.Keys) {
    $outputPath = Join-Path -Path $outputDir -ChildPath "$key.jpg"
    Invoke-WebRequest -Uri $urls[$key] -OutFile $outputPath
}
