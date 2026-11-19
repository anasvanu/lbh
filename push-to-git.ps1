param(
    [Parameter(Mandatory=$false)]
    [string]$RepoUrl
)

$git = "C:\Users\USER\.gemini\antigravity\scratch\bin\git\cmd\git.exe"
Set-Location $PSScriptRoot

if (-not $RepoUrl) {
    Write-Host "Please enter your Git repository URL (e.g. https://github.com/username/repo.git):" -ForegroundColor Cyan
    $RepoUrl = Read-Host "Repository URL"
}

if (-not $RepoUrl) {
    Write-Host "Error: No repository URL provided." -ForegroundColor Red
    exit 1
}

Write-Host "Configuring remote origin: $RepoUrl" -ForegroundColor Green
& $git remote remove origin 2>$null
& $git remote add origin $RepoUrl

Write-Host "Pushing main branch to origin..." -ForegroundColor Green
& $git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "SUCCESS! Your code has been pushed to $RepoUrl" -ForegroundColor Green
    Write-Host "GitHub Pages workflow will now automatically deploy your live showcase site." -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Push failed. If authentication was required, please provide a GitHub Personal Access Token or sign in via GitHub Desktop/browser." -ForegroundColor Yellow
}
