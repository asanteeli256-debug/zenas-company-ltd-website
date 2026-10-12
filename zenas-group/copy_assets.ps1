$travelSrc = 'C:\Users\USER\Desktop\web development\zenas 333\zenas travel photos'
$travelDst = 'C:\Users\USER\Desktop\web development\zenas 333\zenas-group\public\travel'
$estateSrc = 'C:\Users\USER\Desktop\web development\zenas 333\zenas estate section photos and videos'
$estateDst = 'C:\Users\USER\Desktop\web development\zenas 333\zenas-group\public\estate'

$i = 1
Get-ChildItem $travelSrc | ForEach-Object {
    $ext = $_.Extension.ToLower()
    $name = 'travel-' + $i + $ext
    Copy-Item $_.FullName -Destination (Join-Path $travelDst $name) -Force
    Write-Host "Copied travel $name"
    $i++
}

$j = 1
Get-ChildItem $estateSrc | ForEach-Object {
    $ext = $_.Extension.ToLower()
    $name = 'estate-' + $j + $ext
    Copy-Item $_.FullName -Destination (Join-Path $estateDst $name) -Force
    Write-Host "Copied estate $name"
    $j++
}

Write-Host "All assets copied successfully"
