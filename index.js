const fs = require('fs');
const path = require('path');


const jsonFilePath = path.join(__dirname, 'plugins.json');
const rawData = fs.readFileSync(jsonFilePath);
const pluginsData = JSON.parse(rawData);


let readmeContent = `<h1 align="center"> ZOKOU-2.0 Version-Française-plugins </h1>
<div align="center">
<br /> 
---

- Vous pouvez creer vos propres plugins et les proposer

---`;

pluginsData.pluginsVF.forEach(plugin => {
    readmeContent += `


<h4 align="center"> ${plugin.name} </h1>

  Description : ${plugin.desc}

\`\`\`
${plugin.url}
\`\`\`
- Auteur : ${plugin.author}
---`
});


const readmeFilePath = path.join(__dirname, 'ZOKOU-VF.md');
fs.writeFileSync(readmeFilePath, readmeContent);

console.log('ZOKOU-VF.md généré avec succès');


readmeContent = `<h1 align="center"> ZOKOU-2.0 English-version-plugins </h1>
<div align="center">
<br /> 
---

- Make your own plugins and propose it. thanks

---`;

pluginsData.pluginsVE.forEach(plugin => {
    readmeContent += `


<h4 align="center"> ${plugin.name} </h1>

  Description : ${plugin.desc}

\`\`\`
${plugin.url}
\`\`\`
- Author : ${plugin.author}
---`
});


const readmeFilePath2 = path.join(__dirname, 'ZOKOU-VE.md');
fs.writeFileSync(readmeFilePath2, readmeContent);
console.log('ZOKOU-VE.md généré avec succès');
