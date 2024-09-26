# ZOKOU

Bienvenue dans **ZOKOU**, une application qui vous permet de choisir entre deux versions linguistiques :

- **[ZOKOU-VF](./ZOKOU-VF.md)** (Version Française)
- **[ZOKOU-VE](./ZOKOU-VE.md)** (Version Anglaise)

## Choisissez votre version

### 🟢 [ZOKOU-VF (Version Française)](./ZOKOU-VF.md)
La version française inclut une interface et des commandes en français. Suivez le lien ci-dessus pour plus de détails.

**Installation :**
- Utilisez la commande `plugin install` pour installer les plugins nécessaires.

### 🔵 [ZOKOU-VE (Version Anglaise)](./ZOKOU-VE.md)
The English version provides an interface and commands in English. Follow the link above for more details.

**Installation :**
- Use the `plugin install` command to install the required plugins.

---

## How to create plugins

To create and share a plugin with ZOKOU, follow these simple steps:

1. **Go to [gist.github.com](https://gist.github.com)**
   - GitHub Gist allows you to easily share script files.
   
2. **Create a new Gist:**
   - Click on **"Create a new gist"**.
   - Paste your plugin script into the editor.
   - **Make sure the Gist is public** so that everyone can access it.

3. **Get the RAW link of the Gist:**
   - Once the Gist is created, click on **"Raw"** to get the direct link to the raw file.
   - This link will be used to install the plugin in ZOKOU.

4. **Install the plugin in ZOKOU:**
   - Use the following command to install your plugin with the RAW Gist link:
     ```bash
     plugin install https://gist.githubusercontent.com/your-gist-raw-link
     ```

---

## Example plugin or script syntax

Here's a space where you can provide an example plugin or indicate the syntax to use for your plugin scripts:

```js
// Example plugin syntax

const { zokou } = require("../framework/zokou");

zokou({ nomCom: "pugtest",
                 categorie: "General",
                 reaction: "👨🏿‍💻",
                 desc: "Plugins exemple",
                 alias: ["pugt"]
      }, async (origineMessage, zk, commandeOptions) => {
  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  zk.sendMessage(origineMessage,{text : "Hi , My name is XXXXX"}) ;

}); 
