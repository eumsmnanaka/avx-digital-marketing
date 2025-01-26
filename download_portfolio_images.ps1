#!/usr/bin/env pwsh

# Create portfolio images directory if it doesn't exist
$imagesDir = "src\assets\images\portfolio"
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

# Download portfolio images
Download-Image -Uri "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" -OutFile "$imagesDir\projeto1.jpg"

Download-Image -Uri "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" -OutFile "$imagesDir\projeto2.jpg"

Download-Image -Uri "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" -OutFile "$imagesDir\projeto3.jpg"

Download-Image -Uri "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" -OutFile "$imagesDir\projeto4.jpg"

Write-Host "Portfolio image download process completed."
