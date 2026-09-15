// Optometry Vortex - Central Notes Data
// Aapko jab bhi naya topic add ya update karna ho, bas yahan edit karein.

const optometryNotes = {
    "anatomy": {
        title: "Ocular Anatomy & Physiology",
        topics: [
            {
                title: "1. Cornea - Anatomy & Layers",
                content: `
                    <h4>Overview of Cornea</h4>
                    <p>Cornea transparent front part hoti hai eye ki jo optical power ka ~43D to 44D contribute karti hai.</p>
                    <br>
                    <h4>5 Layers of Cornea:</h4>
                    <ul>
                        <li><b>Epithelium:</b> Non-keratinized stratified squamous layer.</li>
                        <li><b>Bowman's Layer:</b> Acellular tough layer.</li>
                        <li><b>Stroma:</b> ~90% thickness, collagen fibrils se bani hoti hai.</li>
                        <li><b>Descemet's Membrane:</b> Basement membrane of endothelium.</li>
                        <li><b>Endothelium:</b> Single layer of hexagones, pump function karti hai.</li>
                    </ul>
                `
            },
            {
                title: "2. Visual Pathway",
                content: `
                    <h4>Visual Pathway Sequence:</h4>
                    <p>Photoreceptors → Optic Nerve → Optic Chiasm → Optic Tract → LGN (Lateral Geniculate Nucleus) → Optic Radiations → Visual Cortex (V1).</p>
                `
            }
        ]
    },

    "optics": {
        title: "Optometric Optics & Refraction",
        topics: [
            {
                title: "1. Principles of Retinoscopy",
                content: `
                    <h4>Objective Refraction Technique</h4>
                    <p>Retinoscopy patient ki refractive error ko neutral lens (working distance adjust karke) se calculate karne ke liye use hoti hai.</p>
                `
            }
        ]
    },

    "clinical": {
        title: "Clinical Optometry & Procedures",
        topics: [
            {
                title: "1. Slit-Lamp Examination Protocol",
                content: `
                    <p>Slit-lamp biomicroscopy illumination techniques: Direct, Diffuse, Retro-illumination, Sclerotic scatter.</p>
                `
            }
        ]
    },

    "pathology": {
        title: "Ocular Pathology & Diseases",
        topics: [
            {
                title: "1. Glaucoma - Classification & Diagnosis",
                content: `
                    <p>Primary Open Angle Glaucoma (POAG) vs Angle Closure Glaucoma (PACG). IOP measurement, Gonioscopy, and Visual Fields assessment.</p>
                `
            }
        ]
    }
};
