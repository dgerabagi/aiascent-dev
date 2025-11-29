# migrate_anguilla_context.ps1
# A PowerShell script to automate the migration of selected artifacts to the new Anguilla Project repository.
# Usage: .\migrate_anguilla_context.ps1

$sourceDir = Get-Location
$destDir = "../anguilla-project" # Adjust if your new repo is elsewhere
$fileList = "anguilla_context_migration_list.txt"

Write-Host "Starting Anguilla Context Migration..."
Write-Host "Source: $sourceDir"
Write-Host "Destination: $destDir"

# Ensure destination exists
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
    Write-Host "Created destination directory."
}

# Create destination folder structure
$folders = @(
    "src/Artifacts",
    "context/dce",
    "context/personal",
    "context/v2v/research-proposals",
    "context/v2v/audio-transcripts/1-on-1-training"
)

foreach ($folder in $folders) {
    $path = Join-Path $destDir $folder
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
    }
}

# Read file list and copy
if (Test-Path $fileList) {
    $files = Get-Content $fileList
    foreach ($file in $files) {
        $srcPath = Join-Path $sourceDir $file
        $dstPath = Join-Path $destDir $file
        
        if (Test-Path $srcPath) {
            Copy-Item -Path $srcPath -Destination $dstPath -Force
            Write-Host "Copied: $file"
        } else {
            Write-Warning "File not found: $file"
        }
    }
} else {
    Write-Error "Migration list ($fileList) not found!"
    exit 1
}

# Copy the new A0 to the destination as the primary A0
$newA0Source = "src/Artifacts/A0 - Anguilla Project - Master Artifact List.md"
$newA0Dest = Join-Path $destDir "src/Artifacts/A0.md"

if (Test-Path $newA0Source) {
    Copy-Item -Path $newA0Source -Destination $newA0Dest -Force
    Write-Host "Initialized new Master Artifact List at $newA0Dest"
}

Write-Host "Migration Complete."