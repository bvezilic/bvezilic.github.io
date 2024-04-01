import eurydice from './images/thumbnails/eurydice.jpg'
import onePunchMan from './images/thumbnails/one-punch-man.jpg'
import oriBlindForest from './images/thumbnails/ori-thumbnail.jpg'
import variationalAutoencoder from './images/thumbnails/variational-autoencoder.jpg'
import nameGenerator from './images/thumbnails/name-generator.jpg'
import neuralStyleTransfer from './images/thumbnails/neural-style-transfer.png'


export const mlProjects = [    
    {
        name: "Variational-autoencoder",
        image: variationalAutoencoder,
        imageTitle: "variational-autoencoder",
        description: "PyTorch implementation of Variational Autoencoder (VAE) on MNIST dataset.",
        repo: "https://github.com/bvezilic/Variational-autoencoder"
    },
    {
        name: "DnD-name-generator",
        image: nameGenerator,
        imageTitle: "dnd-name-generator",
        description: "Character-based RNN for generating Dungeons and Dragons character names based on race and gender.",
        repo: "https://github.com/bvezilic/DnD-name-generator"
    },
    {
        name: "Neural-style-transfer",
        image: neuralStyleTransfer,
        imageTitle: "neural-style-transfer",
        description: "PyTorch implementation of Neural Style Transfer. Learning repository with experiments and figuring stuff out.",
        repo: "https://github.com/bvezilic/Neural-style-transfer"
    }

]

export const guitarArrangements = [
    {
        name: "Ori and the Blind Forest",
        image: oriBlindForest,
        imageTitle: "ori-and-the-blind-forest",
        description: "Main theme from Ori and the Blind Forest video game.\nComposed by Gareth Coker.",
        pdf: "https://www.dropbox.com/s/whgyq6izl4i7b5k/Ori%20and%20the%20Blind%20Forest.pdf"
    },
    {
        name: "Saitama's Theme (Ballad Ver.)",
        image: onePunchMan,
        imageTitle: "saitamas-theme",
        description: "Main theme from One Punch Man series.\nSeason 1, Episode 9, Unyielding Justice.",
        pdf: "https://www.dropbox.com/s/xdwsnguat1fy0ci/One%20Punch%20Man%20-%20Saitama%27s%20theme.pdf"
    },
    {
        name: "Good Riddance",
        image: eurydice,
        imageTitle: "good-riddance",
        description: "From Hades by Supergiant Games.\nComposed by Darren Korb.",
        pdf: "https://www.dropbox.com/s/rokl8lboe0bd1sc/Good%20Riddance.pdf"
    }
]

export const drawings = [
    
]
