#!/usr/bin/env pwsh

# Create images directory if it doesn't exist
$imagesDir = "src\assets\images"
if (!(Test-Path -Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir
}

# Function to download image with retry
function Download-Image {
    param (
        [string]$Uri,
        [string]$OutFile
    )

    $maxRetries = 3
    $retryDelay = 2

    for ($i = 1; $i -le $maxRetries; $i++) {
        try {
            $webClient = New-Object System.Net.WebClient
            $webClient.DownloadFile($Uri, $OutFile)
            Write-Host "Successfully downloaded $OutFile"
            return
        }
        catch {
            Write-Host "Download attempt $i failed for $OutFile. Error: $_"
            if ($i -lt $maxRetries) {
                Start-Sleep -Seconds $retryDelay
            }
        }
    }
    Write-Host "Failed to download $OutFile after $maxRetries attempts"
}

# Download images with retry mechanism
Download-Image -Uri "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" -OutFile "$imagesDir\hero-image.jpg"

Download-Image -Uri "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" -OutFile "$imagesDir\strategy-image.jpg"

Download-Image -Uri "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" -OutFile "$imagesDir\creative-image.jpg"

Download-Image -Uri "https://images.unsplash.com/photo-1460925895917-9fdee5aba8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" -OutFile "$imagesDir\analytics-image.jpg"

Write-Host "Image download process completed."
