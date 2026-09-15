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
    "pathology": {
        title: "Ocular Pathology & Diseases",
        topics: [
            {
                title: "1. Glaucoma - Classification & Diagnosis",
                content: `
                    <p>Primary Open Angle Glaucoma (POAG) vs Angle Closure Glaucoma</p>
                `
            }
        ]
    },
    "binocular_vision": {
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

                    <div style="text-align:center; margin:20px 0; background:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;">
                        <svg width="280" height="160" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="70" cy="40" r="20" fill="#e0f2fe" stroke="#0077b6" stroke-width="2"/>
                            <circle cx="70" cy="32" r="6" fill="#0077b6"/>
                            <text x="70" y="75" font-size="11" text-anchor="middle" fill="#334155">Left Eye</text>
                            
                            <circle cx="210" cy="40" r="20" fill="#e0f2fe" stroke="#0077b6" stroke-width="2"/>
                            <circle cx="210" cy="32" r="6" fill="#0077b6"/>
                            <text x="210" y="75" font-size="11" text-anchor="middle" fill="#334155">Right Eye</text>
                            
                            <circle cx="140" cy="110" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="2" stroke-dasharray="3 3"/>
                            <circle cx="140" cy="102" r="7" fill="#d97706"/>
                            <text x="140" y="148" font-size="11" font-weight="bold" text-anchor="middle" fill="#b45309">Cyclopean Eye (Perception)</text>

                            <line x1="70" y1="40" x2="140" y2="110" stroke="#0077b6" stroke-width="1.5" stroke-dasharray="4"/>
                            <line x1="210" y1="40" x2="140" y2="110" stroke="#0077b6" stroke-width="1.5" stroke-dasharray="4"/>
                        </svg>
                        <p style="font-size:0.8rem; color:#64748b; margin-top:5px;"><i>Fig: Cyclopean Eye - Brain merging two viewpoints into one central perspective</i></p>
                    </div>

                    <h5 style="color:#0077b6; margin-top:15px;">2. Motor System / Mechanism</h5>
                    <p>Controls the 6 extraocular muscles to align the eyes so that the fovea of both eyes points at the same object.</p>
                    <p><b>Tasks of the Motor System:</b></p>
                    <ul>
                        <li><b>Fixation:</b> Maintaining the image of an object on the fovea.</li>
                        <li><b>Alignment:</b> Ensuring both eyes move together (conjugate movements) or move toward/away from each other (vergence) to maintain BSV.</li>
                        <li><b>Field Expansion:</b> Moving the eyes to scan the environment without moving the head.</li>
                    </ul>

                    <h5 style="color:#0077b6; margin-top:15px;">3. Coordination / Mental Process</h5>
                    <ul>
                        <li>This is the final "fusion" step that happens in the brain.</li>
                        <li>If the motor system fails to align the eyes, the sensory system cannot achieve fusion, leading to double vision (diplopia).</li>
                    </ul>

                    <br>
                    <h4>Cyclopean Eye</h4>
                    <ul>
                        <li>The brain acts as if we have one single eye located in the middle of the forehead. This is called the <b>Cyclopean Eye</b>.</li>
                        <li>Because of this, objects seen by both eyes are perceived as having a single direction in space.</li>
                    </ul>
                `
            },
            {
                title: "2. Grades of Binocular Vision (Worth's Classification)",
                content: `
                    <div style="text-align:center; margin:15px 0; background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
                        <svg width="300" height="90" viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="20" width="85" height="50" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
                            <text x="52" y="42" font-size="10" font-weight="bold" text-anchor="middle" fill="#0369a1">Grade 1</text>
                            <text x="52" y="56" font-size="9" text-anchor="middle" fill="#0c4a6e">Simultaneous</text>
                            
                            <rect x="112" y="20" width="75" height="50" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
                            <text x="149" y="42" font-size="10" font-weight="bold" text-anchor="middle" fill="#15803d">Grade 2</text>
                            <text x="149" y="56" font-size="9" text-anchor="middle" fill="#14532d">Fusion</text>

                            <rect x="204" y="20" width="85" height="50" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
                            <text x="246" y="42" font-size="10" font-weight="bold" text-anchor="middle" fill="#b45309">Grade 3</text>
                            <text x="246" y="56" font-size="9" text-anchor="middle" fill="#78350f">Stereopsis (3D)</text>
                        </svg>
                    </div>

                    <h4>1. Simultaneous Perception</h4>
                    <ul>
                        <li>"Power to see 2 dissimilar objects simultaneously"</li>
                        <li>Ceases only when we suppress the image from one eye at will.</li>
                    </ul>

                    <br>
                    <h4>2. Fusion</h4>
                    <ul>
                        <li><b>2nd Grade of Binocular Vision</b></li>
                        <li>The process where the brain combines two separate images (one from each eye) into a single perception.</li>
                    </ul>

                    <h5 style="color:#0077b6; margin-top:10px;">Sensory Fusion</h5>
                    <ul>
                        <li>This is a mental (Brain) process.</li>
                        <li>It is the ability of the visual cortex to integrate two similar images from both eyes into one single picture.</li>
                        <li><b>Requirement:</b> The images must be similar in size, shape, and brightness for sensory fusion to happen.</li>
                    </ul>

                    <h5 style="color:#0077b6; margin-top:10px;">Motor Fusion</h5>
                    <ul>
                        <li>This is a physical (Muscle) process.</li>
                        <li>It is the ability of the eyes to move (align) so that the images always fall on corresponding retinal points.</li>
                        <li><b>Stimulus:</b> Motor fusion is triggered by Retinal Disparity (when the images are slightly out of alignment).</li>
                        <li><b>Movement:</b> It uses "Vergence" movements (moving eyes inward or outward) to maintain a single image.</li>
                    </ul>

                    <br>
                    <h4>3. Stereopsis (3D Depth Perception)</h4>
                    <ul>
                        <li>Stereopsis is the highest grade of binocular vision, where the brain uses the slight differences between the two retinal images to perceive three-dimensional depth.</li>
                    </ul>
                `
            },
            {
                title: "3. Stereopsis Mechanics & Acuity",
                content: `
                    <h4>Physiologic Basis of Stereopsis</h4>
                    <ul>
                        <li><b>Retinal Disparity:</b> Stereopsis is triggered by "horizontal retinal disparity".</li>
                        <li><b>The Process:</b> Objects located slightly in front of or behind the horopter fall on non-corresponding (disparate) points on the retina.</li>
                        <li><b>Sensory Input:</b> These small disparities are transmitted to the visual cortex, where specific neurons "decode" the difference to tell you exactly how far an object is.</li>
                        <li><b>Requirement:</b> It requires good vision in both eyes and the ability to maintain binocular alignment.</li>
                    </ul>

                    <br>
                    <h4>Local vs. Global Stereopsis</h4>
                    <ul>
                        <li><b>Local Stereopsis:</b> This refers to the perception of depth in simple, isolated objects (like a single line or a dot) based on a single point of disparity.</li>
                        <li><b>Global Stereopsis:</b> This is more complex and involves large patterns (like Random Dot Stereograms). The brain has to compare the entire pattern of both eyes to find the depth.</li>
                        <li><b>Difference:</b> You can have local stereopsis but fail global stereopsis if your brain cannot process complex patterns correctly.</li>
                    </ul>

                    <br>
                    <h4>Stereopsis and Fusion</h4>
                    <ul>
                        <li><b>The Link:</b> Stereopsis is closely tied to Panum's Area.</li>
                        <li><b>Small Disparity (Fusion):</b> If the disparity is small, the brain "fuses" the images and you see depth (Stereopsis).</li>
                        <li><b>Large Disparity (No Fusion):</b> If the disparity is too large, it falls outside Panum's area, resulting in double vision (Diplopia) instead of stereopsis.</li>
                    </ul>

                    <div style="text-align:center; margin:20px 0; background:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;">
                        <svg width="260" height="120" viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 30 90 Q 130 30 230 90" fill="transparent" stroke="#0284c7" stroke-width="2"/>
                            <text x="130" y="45" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">Horopter</text>

                            <path d="M 30 80 Q 130 20 230 80 L 230 100 Q 130 40 30 100 Z" fill="#10b981" opacity="0.2"/>
                            <text x="130" y="75" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">Panum's Fusion Area (Single Vision / Stereopsis)</text>
                            
                            <text x="40" y="25" font-size="9" fill="#ef4444">Diplopia Zone</text>
                            <text x="220" y="25" font-size="9" fill="#ef4444">Diplopia Zone</text>
                        </svg>
                    </div>

                    <br>
                    <h4>Stereoscopic Acuity</h4>
                    <ul>
                        <li><b>Definition:</b> This is the "sharpness" of your depth perception.</li>
                        <li><b>Measurement:</b> It is measured by the smallest amount of retinal disparity that a person can detect.</li>
                        <li><b>Units:</b> It is usually expressed in seconds of arc (").</li>
                        <li><b>Factors:</b> Acuity depends on the distance of the object, the lighting, and the contrast of the target.</li>
                        <li><b>Competition:</b> While fusion tries to make the images identical, stereopsis relies on the images being slightly different.</li>
                    </ul>
                `
            }
        ]
    }
};
