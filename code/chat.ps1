# Script PowerShell de base pour le chat IA

# Configuration
\ = \"VotreCléAPI\" # À remplacer
\ = \"https://api.ia.example.com/chat\" # À remplacer

# Fonction pour envoyer un message à l'API
function Send-Message {
    param (
        [string]\
    )
    
    \ = @{
        \"Authorization\" = \"Bearer \\"
        \"Content-Type\" = \"application/json\"
    }
    
    \ = @{
        message = \
    } | ConvertTo-Json
    
    try {
        \ = Invoke-RestMethod -Uri \ -Headers \ -Body \ -Method Post
        return \.response
    }
    catch {
        Write-Host \"An error occurred: \\"
        return \"Sorry, I encountered an error. Please try again.\"
    }
}

# Interface de chat
Write-Host \"Bienvenue dans le chat IA !\"
Write-Host \"Écrivez 'quit' pour quitter.\"

while (\True) {
    Write-Host \"Vous : \" -NoNewline
    \ = Read-Host
    if (\ -eq \"quit\") {
        break
    }
    \ = Send-Message -message \
    Write-Host \"IA : \\"
}
