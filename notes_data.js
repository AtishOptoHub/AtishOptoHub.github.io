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
    },
    "binocular": {
        title: "Binocular Vision & Ocular Motility",
        topics: [
            {
                title: "1. Physiology / Pre-requisites for Development of BSV",
                content: `
                    <p>To achieve <b>Binocular Single Vision (BSV)</b>—the ability to use both eyes together to perceive a single, three-dimensional image—three primary mechanisms must function correctly:</p>
                    
                    <br>
                    <h4>The Eyes as a Sensorimotor Unit</h4>
                    
                    <h5 style="color:#0077b6; margin-top:10px;">1. Sensory System / Mechanism</h5>
                    <p>This involves how the eyes receive and transmit visual information to the brain.</p>
                    <ul>
                        <li><b>Image Equality:</b> Both eyes must receive images of approximately equal clarity (focus) and size. Large discrepancies (like aniseikonia) can prevent fusion.</li>
                        <li><b>Corresponding Retinal Areas:</b> Images must fall on "corresponding" points on the retina so that the brain can perceive the eyes as cyclopean (merging two viewpoints into one central perspective).</li>
                        <li><b>Normal Visual Pathways:</b> The neural "wiring" from the retina to the brain must be intact and functioning normally.</li>
                    </ul>

                    <!-- SVG Diagram: Cyclopean Eye & Visual Pathway -->
                    <div style="text-align:center; margin:20px 0; background:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;">
                        <svg width="280" height="160" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
                            <!-- Left Eye -->
                            <circle cx="70" cy="40" r="20" fill="#e0f2fe" stroke="#0077b6" stroke-width="2"/>
                            <circle cx="70" cy="32" r="6" fill="#0077b6"/>
                            <text x="70" y="75" font-size="11" text-anchor="middle" fill="#334155">Left Eye</text>
                            
                            <!-- Right Eye -->
                            <circle cx="210" cy="40" r="20" fill="#e0f2fe" stroke="#0077b6" stroke-width="2"/>
                            <circle cx="210" cy="32" r="6" fill="#0077b6"/>
                            <text x="210" y="75" font-size="11" text-anchor="middle" fill="#334155">Right Eye</text>
                            
                            <!-- Cyclopean Eye Center -->
                            <circle cx="140" cy="110" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="2" stroke-dasharray="3 3"/>
                            <circle cx="140" cy="102" r="7" fill="#d97706"/>
                            <text x="140" y="148" font-size="11" font-weight="bold" text-anchor="middle" fill="#b45309">Cyclopean Eye (Perception)</text>

                            <!-- Convergence Lines -->
                            <line x1="70" y1="40" x2="140" y2="110" stroke="#0077b6" stroke-width="1.5" stroke-dasharray="4"/>
                            <line x1="210" y1="40" x2="140" y2="110" stroke="#0077b6" stroke-width="1.5" stroke-dasharray="4"/>
                        </svg>
                        <p style="font-size:0.8rem; color:#64748b; margin-top:5px;"><i>Fig: Cyclopean Eye - Brain merging two viewpoints into one central perspective</i></p>
                    </div>

                    <h5 style="color:#0077b6; margin-top:15px;">2. Motor System / Mechanism</h5>
                    <p>Controls the 6 extraocular muscles to align the eyes so that the fovea of both eyes points at the same object.</p>
                    
                    <p><b>Tasks of the Motor System:</b></p>
                    <p>The primary objectives are:</p>
                    <ul>
                        <li><b>Fixation:</b> Maintaining the image of an object on the fovea.</li>
                        <li><b>Alignment:</b> Ensuring both eyes move together (conjugate movements) or move toward/away from each other (vergenc
};
