// Module 1 Data File (Topics 1 to 10)

const module1Data = [
  {
    title: "Orbital Osteology (Bony Orbit, Margins, Foramina & Fissures)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction & Overview</h3>
        <p>The human orbit is a paired, quadrilateral pyramid-shaped bony cavity in the skull that houses and protects the eyeball (globe), extraocular muscles, nerves, blood vessels, and lacrimal apparatus. The apex of the pyramid points posteriorly towards the optic canal, while the base opens anteriorly as the orbital margin.</p>
        <table class="param-table">
          <tr><th>Parameter</th><th>Clinical Specification</th></tr>
          <tr><td>Adult Orbital Volume</td><td>~30 mL (the eyeball occupies ~6.5 mL or ~20%)</td></tr>
          <tr><td>Orbital Height (Margin)</td><td>~35 mm</td></tr>
          <tr><td>Orbital Width (Margin)</td><td>~40 mm</td></tr>
          <tr><td>Depth (Margin to Apex)</td><td>~40 to 45 mm</td></tr>
          <tr><td>Medial Walls Axis</td><td>Parallel to each other (1 to 1.5 cm apart)</td></tr>
          <tr><td>Lateral Walls Axis</td><td>Perpendicular (90°) to each other (45° to sagittal plane)</td></tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>2. The Seven Bones of the Orbit</h3>
        <p>The bony orbit is formed by 7 individual cranial and facial bones: <strong>Frontal, Zygomatic, Maxilla, Ethmoid, Sphenoid (Greater & Lesser wings), Lacrimal, and Palatine</strong>.</p>
        <ul>
          <li><strong>Mnemonic to remember:</strong> <em>"Many Surgeons From UCLA Eat Sphenoid Pastries"</em> (Maxilla, Sphenoid, Frontal, Lacrimal, Ethmoid, Superior Palatine, Zygomatic).</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>3. Structural Boundaries (Walls & Margins)</h3>
        <ul>
          <li><strong>Roof (Superior Wall):</strong> Formed mainly by the orbital plate of the <em>Frontal bone</em> and anteriorly by the lesser wing of the <em>Sphenoid bone</em>. Contains the lacrimal fossa (anterolaterally) and trochlear fovea (anteromedially).</li>
          <li><strong>Floor (Inferior Wall):</strong> Formed by the <em>Maxilla</em> (orbital surface), <em>Zygomatic bone</em>, and <em>Palatine bone</em> (orbital process). Extremely thin over the infraorbital canal; most common site for <strong>Blowout Fractures</strong>.</li>
          <li><strong>Medial Wall:</strong> Formed by 4 bones (Anterior to Posterior): <em>Frontal process of Maxilla, Lacrimal bone, Ethmoid bone (Lamina Papyracea), and Sphenoid body</em>. The lamina papyracea is paper-thin, providing a path for ethmoid sinusitis to spread into the orbit (Orbital Cellulitis).</li>
          <li><strong>Lateral Wall:</strong> Formed by the <em>Zygomatic bone</em> anteriorly and the greater wing of the <em>Sphenoid bone</em> posteriorly. Strongest wall of the orbit. Contains Whitnall's tubercle.</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>4. Important Foramina, Fissures & Transmitted Structures</h3>
        <table class="param-table">
          <tr><th>Aperture / Foramen</th><th>Location</th><th>Transmitted Structures</th></tr>
          <tr>
            <td><strong>Optic Canal</strong></td>
            <td>Lesser wing of Sphenoid</td>
            <td>Optic Nerve (CN II), Ophthalmic Artery, Sympathetic Nerves.</td>
          </tr>
          <tr>
            <td><strong>Superior Orbital Fissure (SOF)</strong></td>
            <td>Between Greater and Lesser wings of Sphenoid</td>
            <td>
              <em>Inside Annulus of Zinn:</em> Superior & Inferior divisions of Oculomotor N. (CN III), Nasociliary N. (CN V1), Abducens N. (CN VI).<br>
              <em>Outside Annulus:</em> Trochlear N. (CN IV), Frontal N. (CN V1), Lacrimal N. (CN V1), Superior Ophthalmic Vein.
            </td>
          </tr>
          <tr>
            <td><strong>Inferior Orbital Fissure (IOF)</strong></td>
            <td>Between Maxilla, Sphenoid (greater wing), & Palatine</td>
            <td>Infraorbital Nerve & Artery, Zygomatic Nerve, Inferior Ophthalmic Vein branches.</td>
          </tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>5. Clinical Correlations</h3>
        <ul>
          <li><strong>Blowout Fracture:</strong> Blunt impact to the globe increases intraorbital pressure, fracturing the thin floor (maxillary sinus) or medial wall (ethmoid sinus). Signs include enophthalmos, diplopia (due to inferior rectus entrapment), and infraorbital anesthesia.</li>
          <li><strong>Orbital Cellulitis:</strong> Infection originating from ethmoid sinuses traversing the lamina papyracea into orbital fat/tissues. Surgical emergency due to risk of cavernous sinus thrombosis and vision loss.</li>
        </ul>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Wolff's Anatomy of the Eye and Orbit (8th Ed.); Kanski's Clinical Ophthalmology; AAO BCSC Section 2 (Fundamentals and Principles of Ophthalmology).
      </div>
    `
  },
  {
    title: "Extraocular Muscles (Origin, Insertion, Actions & Innervation)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction</h3>
        <p>Eye movements are controlled by six extraocular muscles (EOMs): four recti muscles (Superior, Inferior, Medial, Lateral) and two oblique muscles (Superior and Inferior). Smooth coordination between these muscles maintains binocular single vision and foveal fixation.</p>
      </div>

      <div class="academic-sec">
        <h3>2. Muscle Origins & Insertions</h3>
        <ul>
          <li><strong>Annulus of Zinn (Common Tendinous Ring):</strong> A fibrous ring encircling the optic canal and central SOF. Gives origin to all four recti muscles.</li>
          <li><strong>Spiral of Tillaux:</strong> Imaginary spiral line connecting the insertions of the four recti muscles from the limbus:
            <ul>
              <li><strong>Medial Rectus (MR):</strong> 5.5 mm from limbus</li>
              <li><strong>Inferior Rectus (IR):</strong> 6.5 mm from limbus</li>
              <li><strong>Lateral Rectus (LR):</strong> 6.9 mm from limbus</li>
              <li><strong>Superior Rectus (SR):</strong> 7.7 mm from limbus</li>
            </ul>
          </li>
          <li><strong>Superior Oblique (SO):</strong> Originates at apex above Annulus of Zinn, passes through the <em>Trochlea</em> (cartilaginous pulley), and inserts onto posterolateral sclera.</li>
          <li><strong>Inferior Oblique (IO):</strong> Only EOM originating from anterior orbit (maxillary bone floor near lacrimal fossa) and inserting onto posterolateral sclera under LR.</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>3. Actions of Extraocular Muscles</h3>
        <table class="param-table">
          <tr><th>Muscle</th><th>Primary Action</th><th>Secondary Action</th><th>Tertiary Action</th></tr>
          <tr><td>Medial Rectus (MR)</td><td>Adduction</td><td>None</td><td>None</td></tr>
          <tr><td>Lateral Rectus (LR)</td><td>Abduction</td><td>None</td><td>None</td></tr>
          <tr><td>Superior Rectus (SR)</td><td>Elevation (in 23° Abduction)</td><td>Incyclotorsion</td><td>Adduction</td></tr>
          <tr><td>Inferior Rectus (IR)</td><td>Depression (in 23° Abduction)</td><td>Excyclotorsion</td><td>Adduction</td></tr>
          <tr><td>Superior Oblique (SO)</td><td>Incyclotorsion</td><td>Depression (in 51° Adduction)</td><td>Abduction</td></tr>
          <tr><td>Inferior Oblique (IO)</td><td>Excyclotorsion</td><td>Elevation (in 51° Adduction)</td><td>Abduction</td></tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>4. Innervation & Laws of Eye Movements</h3>
        <ul>
          <li><strong>Innervation Formula:</strong> <code>LR6(SO4)3</code>
            <ul>
              <li><strong>CN VI (Abducens):</strong> Lateral Rectus</li>
              <li><strong>CN IV (Trochlear):</strong> Superior Oblique</li>
              <li><strong>CN III (Oculomotor):</strong> Superior, Inferior, Medial Recti, and Inferior Oblique</li>
            </ul>
          </li>
          <li><strong>Hering's Law of Equal Innervation:</strong> Yoke muscles receive equal and simultaneous innervation during conjugate eye movements (e.g., Right LR and Left MR in dextroversion).</li>
          <li><strong>Sherrington's Law of Reciprocal Innervation:</strong> Increased innervation to an agonist muscle is accompanied by decreased innervation to its antagonist muscle.</li>
        </ul>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Binocular Vision and Ocular Motility by von Noorden; Adler's Physiology of the Eye.
      </div>
    `
  },
  {
    title: "Ocular Blood Supply (Arterial, Venous Outflow & Cavernous Sinus)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Arterial Blood Supply</h3>
        <p>The primary source of blood supply to the eye and orbital structures is the <strong>Ophthalmic Artery</strong>, the first major branch of the Internal Carotid Artery (ICA) after emerging from the cavernous sinus.</p>
        <p><strong>Major Branches of Ophthalmic Artery:</strong></p>
        <ul>
          <li><strong>Central Retinal Artery (CRA):</strong> Enters optic nerve ~10-12 mm behind the globe. End-artery supplying inner 2/3 of neurosensory retina.</li>
          <li><strong>Ciliary Arteries:</strong>
            <ul>
              <li><em>Short Posterior Ciliary Arteries (SPCAs):</em> 15–20 branches supplying choroid, optic disc (Circle of Zinn-Haller).</li>
              <li><em>Long Posterior Ciliary Arteries (LPCAs):</em> 2 branches (Nasal & Temporal) travelling forward in suprachoroidal space to form Major Arterial Circle of Iris.</li>
              <li><em>Anterior Ciliary Arteries (ACAs):</em> Derived from muscular arteries of recti (2 per muscle, except 1 for LR = 7 total). Supply anterior segment and anterior episcleral arterial plexus.</li>
            </ul>
          </li>
          <li><strong>Lacrimal Artery:</strong> Supplies lacrimal gland and lateral eyelids.</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>2. Venous Drainage System</h3>
        <table class="param-table">
          <tr><th>Vein</th><th>Pathways & Connections</th></tr>
          <tr><td>Superior Ophthalmic Vein (SOV)</td><td>Formed by angular/supraorbital veins; passes through SOF outside Annulus of Zinn to drain into Cavernous Sinus. Primary venous channel.</td></tr>
          <tr><td>Inferior Ophthalmic Vein (IOV)</td><td>Originates from floor/medial wall; divides to drain into SOV and Pterygoid Venous Plexus via IOF.</td></tr>
          <tr><td>Vortex Veins (4 to 8 channels)</td><td>Drain the entire uveal tract (choroid, ciliary body, iris) and empty into SOV and IOV in posterior quadrants.</td></tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>3. Cavernous Sinus Anatomy & Clinical Importance</h3>
        <p>Dural venous sinus situated on either side of sella turcica. Transmits critical neurovascular structures:</p>
        <ul>
          <li><strong>Structures passing THROUGH Sinus Center:</strong> Internal Carotid Artery (ICA) and Abducens Nerve (CN VI - most vulnerable to palsy).</li>
          <li><strong>Structures in LATERAL Wall (Top to Bottom):</strong> Oculomotor N. (CN III), Trochlear N. (CN IV), Ophthalmic N. (CN V1), Maxillary N. (CN V2).</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>4. Clinical Correlations</h3>
        <ul>
          <li><strong>Central Retinal Artery Occlusion (CRAO):</strong> Sudden, painless visual loss showing a <em>Cherry-Red Spot</em> at fovea and ground-glass retinal edema.</li>
          <li><strong>Cavernous Sinus Thrombosis (CST):</strong> Infection spreading via valveless ophthalmic veins causing proptosis, ophthalmoplegia, and facial anesthesia.</li>
        </ul>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Clinical Anatomy of the Eye by Snell; Duane's Ophthalmology.
      </div>
    `
  },
  {
    title: "Cranial Nerves II, III, IV, V, VI & Sympathetic Innervation",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction</h3>
        <p>Ocular sensory, motor, and autonomic functions are governed by Cranial Nerves II, III, IV, V, VI, and the ocular sympathetic pathway.</p>
      </div>

      <div class="academic-sec">
        <h3>2. Cranial Nerves Summary Table</h3>
        <table class="param-table">
          <tr><th>Cranial Nerve</th><th>Nucleus / Origin</th><th>Function & Distribution</th></tr>
          <tr>
            <td><strong>CN II (Optic)</strong></td>
            <td>Retinal Ganglion Cell Axons</td>
            <td>Sensory vision. Divided into Intraocular, Intraorbital, Intracanalicular, and Intracranial segments.</td>
          </tr>
          <tr>
            <td><strong>CN III (Oculomotor)</strong></td>
            <td>Midbrain (Edinger-Westphal & Motor nucleus)</td>
            <td>
              <em>Superior Division:</em> Levator palpebrae superioris, SR.<br>
              <em>Inferior Division:</em> MR, IR, IO, Parasympathetic to Sphincter Pupillae & Ciliary Muscle (via Ciliary Ganglion).
            </td>
          </tr>
          <tr>
            <td><strong>CN IV (Trochlear)</strong></td>
            <td>Dorsal Midbrain</td>
            <td>Only CN exiting dorsally and fully decussating. Innervates Superior Oblique (SO).</td>
          </tr>
          <tr>
            <td><strong>CN V1 (Ophthalmic)</strong></td>
            <td>Trigeminal Ganglion</td>
            <td>Sensory to eye/orbit. Branches: <strong>NFL</strong> (Nasociliary, Frontal, Lacrimal).</td>
          </tr>
          <tr>
            <td><strong>CN VI (Abducens)</strong></td>
            <td>Pons</td>
            <td>Innervates Lateral Rectus (LR). Longest intracranial course (vulnerable to high ICP).</td>
          </tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>3. Ocular Sympathetic Pathway (3-Neuron Chain)</h3>
        <ol>
          <li><strong>First-Order Neuron:</strong> Hypothalamus to Ciliospinal Center of Budge (C8–T2).</li>
          <li><strong>Second-Order Neuron:</strong> Exits spinal cord, arches over lung apex, synapsing at <strong>Superior Cervical Ganglion</strong>.</li>
          <li><strong>Third-Order Neuron:</strong> Travels with Internal Carotid Plexus & CN V1 to innervate <strong>Dilator Pupillae</strong> and <strong>Müller's Muscle</strong>.</li>
        </ol>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Clinical Neuro-Ophthalmology by Walsh and Hoyt; AK Khurana.
      </div>
    `
  },
  {
    title: "Eyelids & Lacrimal Apparatus (Anatomy, Drainage & Tear Film)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Eyelid Anatomy & Layers</h3>
        <p>The eyelids (palpebrae) protect the globe, contribute to tear film distribution, and control light entry.</p>
        <p><strong>Histological Layers (Anterior to Posterior):</strong></p>
        <ol>
          <li><strong>Skin & Subcutaneous Tissue:</strong> Thinnest skin in the body; devoid of subcutaneous fat.</li>
          <li><strong>Orbicularis Oculi Muscle:</strong> Concentric striated muscle innervated by CN VII (Facial). Divided into Orbital, Palpebral (Preseptal & Pretarsal), and Horner's Muscle segments. Closes eyelids.</li>
          <li><strong>Orbital Septum:</strong> Fibrous barrier extending from orbital margins to tarsal plates. Separates preseptal tissues from orbital fat.</li>
          <li><strong>Eyelid Retractors:</strong>
            <ul>
              <li><em>Upper Lid:</em> Levator Palpebrae Superioris (LPS - CN III) and Müller's Muscle (Sympathetic).</li>
              <li><em>Lower Lid:</em> Capsulopalpebral fascia and inferior tarsal muscle.</li>
            </ul>
          </li>
          <li><strong>Tarsal Plates:</strong> Dense fibrous tissue containing <strong>Meibomian Glands</strong> (~30–40 in upper lid, ~20–30 in lower lid).</li>
          <li><strong>Palpebral Conjunctiva:</strong> Non-keratinized stratified columnar epithelium lining inner lid surface.</li>
        </ol>
      </div>

      <div class="academic-sec">
        <h3>2. Lacrimal Apparatus & Excretory Pathway</h3>
        <ul>
          <li><strong>Secretory System:</strong> Main Lacrimal Gland (in lacrimal fossa of frontal bone, divided into Orbital and Palpebral lobes by LPS aponeurosis) + Accessory Lacrimal Glands of Krause and Wolfring.</li>
          <li><strong>Excretory Pathway:</strong> Lacrimal Puncta (Upper & Lower) &rarr; Lacrimal Canaliculi (2 mm vertical, 8 mm horizontal) &rarr; Common Canaliculus &rarr; Valve of Rosenmüller &rarr; <strong>Lacrimal Sac</strong> &rarr; <strong>Nasolacrimal Duct (NLD)</strong> (~18 mm long) &rarr; Opens into <em>Inferior Meatus</em> of nasal cavity (guarded by <strong>Valve of Hasner</strong>).</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>3. Tear Film Structure & Physiology</h3>
        <p>Normal Tear Film Thickness: 3–10 µm; Volume: ~7 µL; pH: 7.4; Osmolality: ~302 mOsm/kg.</p>
        <table class="param-table">
          <tr><th>Tear Layer</th><th>Thickness</th><th>Secretory Source</th><th>Function</th></tr>
          <tr><td>Lipid Layer (Outer)</td><td>0.1 µm</td><td>Meibomian & Zeis Glands</td><td>Prevents evaporation; lowers surface tension.</td></tr>
          <tr><td>Aqueous Layer (Middle)</td><td>~7 µm</td><td>Main & Accessory Lacrimal Glands</td><td>Supplies O2, Lysozyme, IgA, Lactoferrin; flushes debris.</td></tr>
          <tr><td>Mucin Layer (Inner)</td><td>0.02–0.05 µm</td><td>Conjunctival Goblet Cells & Crypts of Henle</td><td>Converts hydrophobic corneal epithelium to hydrophilic surface.</td></tr>
        </table>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Ocular Surface and Tear Film (AAO BCSC); Adler's Physiology of the Eye.
      </div>
    `
  },
  {
    title: "Cornea (Microscopic Anatomy, Physiology, Transparency & Biomechanics)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Anatomical & Optical Specifications</h3>
        <p>The cornea is the principal refracting element of the optical system, providing ~40.00 D to +44.00 D (~70%) of total ocular refractive power.</p>
        <table class="param-table">
          <tr><th>Parameter</th><th>Clinical Specification</th></tr>
          <tr><td>Horizontal Diameter</td><td>11.5 to 12.0 mm (Adult)</td></tr>
          <tr><td>Vertical Diameter</td><td>10.5 to 11.0 mm (Adult)</td></tr>
          <tr><td>Central Thickness (CCT)</td><td>530 to 550 µm (0.53–0.55 mm)</td></tr>
          <tr><td>Peripheral Thickness</td><td>650 to 700 µm (0.65–0.70 mm)</td></tr>
          <tr><td>Anterior Surface Radius of Curvature</td><td>~7.8 mm</td></tr>
          <tr><td>Posterior Surface Radius of Curvature</td><td>~6.5 mm</td></tr>
          <tr><td>Refractive Index</td><td>1.376</td></tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>2. Histological Layers (Anterior to Posterior)</h3>
        <ol>
          <li><strong>Epithelium:</strong> 50 µm thick (~10% total thickness). Non-keratinized stratified squamous epithelium (5–6 layers: Superficial, Wing, Basal cells). High regenerative capacity via Limbal Stem Cells.</li>
          <li><strong>Bowman's Layer:</strong> 8–14 µm acellular, smooth layer of randomly arranged Type I collagen. Acquired/acellular structure; <em>cannot regenerate</em> (forms scar if damaged).</li>
          <li><strong>Stroma (Substantia Propria):</strong> ~500 µm (~90% total thickness). Composed of parallel lamellae of Type I collagen fibrils encased in glycosaminoglycans (Chondroitin sulphate, Keratan sulphate). Keratocytes reside between lamell
          // Add Topics 11 to 20 to module1Data array

module1Data.push(
  {
    title: "Angle of Anterior Chamber & Structures (Gonioscopic Anatomy & Drainage)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction</h3>
        <p>The angle of the anterior chamber (iridocorneal angle) is situated at the junction between the peripheral cornea and the root of the iris. It is the primary site for aqueous humor outflow, critical for regulating Intraocular Pressure (IOP).</p>
      </div>

      <div class="academic-sec">
        <h3>2. Gonioscopic Structures (Anterior to Posterior)</h3>
        <p>When viewed clinically via gonioscopy, the following structures are identified from anterior (corneal side) to posterior (iris side):</p>
        <ol>
          <li><strong>Schwalbe's Line:</strong> The anatomical termination of Descemet's membrane; appears as a fine, raised white line.</li>
          <li><strong>Trabecular Meshwork (TM):</strong> Sieve-like spongy tissue through which aqueous drains. Divided into:
            <ul>
              <li><em>Uveal Meshwork:</em> Innermost layer facing anterior chamber; large pore size (25–70 µm).</li>
              <li><em>Corneoscleral Meshwork:</em> Middle layer; smaller pore size (2–15 µm).</li>
              <li><em>Juxtacanalicular Meshwork (Cribriform):</em> Outermost layer adjacent to Schlemm's canal; offers the highest resistance to aqueous outflow.</li>
            </ul>
          </li>
          <li><strong>Schlemm's Canal:</strong> Circular vascular structure situated in the scleral sulcus that collects aqueous humor from TM and drains into episcleral veins.</li>
          <li><strong>Scleral Spur:</strong> Posterior projection of scleral tissue that provides attachment for the ciliary muscle and TM fibers.</li>
          <li><strong>Ciliary Body Band (CBB):</strong> Grayish-brown band representing the exposed anterior portion of the ciliary body.</li>
          <li><strong>Iris Processes:</strong> Fine extensions of iris tissue inserting onto the scleral spur or TM.</li>
        </ol>
      </div>

      <div class="academic-sec">
        <h3>3. Grading Systems for Angle Width</h3>
        <table class="param-table">
          <tr><th>Shaffer Grade</th><th>Angle Width (Degrees)</th><th>Clinical Interpretation</th></tr>
          <tr><td>Grade 4</td><td>35° – 45°</td><td>Wide open angle; Ciliary body band clearly visible</td></tr>
          <tr><td>Grade 3</td><td>20° – 35°</td><td>Open angle; Scleral spur visible</td></tr>
          <tr><td>Grade 2</td><td>20°</td><td>Moderately narrow angle; Trabecular meshwork visible</td></tr>
          <tr><td>Grade 1</td><td>10°</td><td>Extremely narrow angle; Only Schwalbe's line visible</td></tr>
          <tr><td>Grade 0</td><td>0°</td><td>Closed angle (Iridocorneal contact present)</td></tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>4. Clinical Correlations</h3>
        <ul>
          <li><strong>Primary Open-Angle Glaucoma (POAG):</strong> Increased outflow resistance within the juxtacanalicular trabecular meshwork leading to elevated IOP and optic neuropathy.</li>
          <li><strong>Primary Angle-Closure Glaucoma (PACG):</strong> Physical blockage of trabecular meshwork by peripheral iris tissue, causing sudden spike in IOP.</li>
        </ul>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Shield's Textbook of Glaucoma (7th Ed.); Gonioscopy by Alward; AK Khurana.
      </div>
    `
  },
  {
    title: "Pupil (Anatomy, Pupillary Reflexes & Anomalies)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction</h3>
        <p>The pupil is a variable circular aperture located slightly nasal to the center of the iris. It regulates the amount of light entering the eye, minimizes spherical and chromatic aberrations, and increases depth of focus.</p>
      </div>

      <div class="academic-sec">
        <h3>2. Anatomical & Physiological Parameters</h3>
        <table class="param-table">
          <tr><th>Parameter</th><th>Clinical Specification</th></tr>
          <tr><td>Normal Diameter (Photopic)</td><td>2.0 to 4.0 mm</td></tr>
          <tr><td>Normal Diameter (Scotopic)</td><td>4.0 to 8.0 mm</td></tr>
          <tr><td>Physiological Anisocoria</td><td>Up to 0.4 - 0.5 mm difference between eyes (normal variant)</td></tr>
          <tr><td>Pupillary Constriction (Miosis)</td><td>Controlled by Sphincter Pupillae (Parasympathetic, CN III)</td></tr>
          <tr><td>Pupillary Dilation (Mydriasis)</td><td>Controlled by Dilator Pupillae (Sympathetic)</td></tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>3. Pupillary Reflex Pathways</h3>
        <ul>
          <li><strong>Light Reflex Pathway (Afferent & Efferent):</strong>
            <ul>
              <li><em>Afferent:</em> Retinal photoreceptors &rarr; Optic nerve (CN II) &rarr; Optic chiasm (decussation) &rarr; Optic tract &rarr; Pretectal nucleus in midbrain.</li>
              <li><em>Interneuronal Connection:</em> Fibers pass from pretectal nucleus bilaterally to both <strong>Edinger-Westphal (EW) nuclei</strong>.</li>
              <li><em>Efferent:</em> EW nucleus &rarr; Oculomotor nerve (CN III) &rarr; Ciliary ganglion &rarr; Short ciliary nerves &rarr; Sphincter pupillae muscle (causes direct and consensual light reflex).</li>
            </ul>
          </li>
          <li><strong>Near Triad Reflex:</strong> Simultaneous occurrence of <em>Accommodation</em>, <em>Convergence</em>, and <em>Miosis</em> upon viewing a near object.</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>4. Clinical Correlations</h3>
        <ul>
          <li><strong>Relative Afferent Pupillary Defect (RAPD / Marcus Gunn Pupil):</strong> Reduced pupillary response to light in the affected eye relative to the normal eye during the swinging flashlight test; indicates optic nerve or severe retinal disease.</li>
          <li><strong>Argyll Robertson Pupil:</strong> Small, irregular pupils that accommodate but do not respond to light (Light-Near Dissociation); classic sign of neurosyphilis.</li>
          <li><strong>Horner’s Syndrome:</strong> Sympathetic denervation characterized by Triad: Miosis, Ptosis, and Anhidrosis.</li>
          <li><strong>Adie's Tonic Pupil:</strong> Benign condition with a dilated pupil showing sluggish reaction to light due to ciliary ganglion parasympathetic denervation.</li>
        </ul>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Clinical Neuro-Ophthalmology by Miller & Newman; Adler's Physiology of the Eye.
      </div>
    `
  },
  {
    title: "Iris (Anatomy, Layers, Musculature & Pigmentation)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction</h3>
        <p>The iris is the most anterior part of the vascular tunic (uvea), forming a thin, contractile circular diaphragm in front of the crystalline lens. It divides the space between the cornea and lens into anterior and posterior chambers.</p>
      </div>

      <div class="academic-sec">
        <h3>2. Gross Anatomical Features</h3>
        <ul>
          <li><strong>Collarette:</strong> A zig-zag ridge located ~1.5 mm from pupillary margin, dividing the iris into an inner <em>Pupillary Zone</em> and an outer <em>Ciliary Zone</em>.</li>
          <li><strong>Iris Crypts (Crypts of Fuchs):</strong> Depressions in stroma that allow aqueous to pass in and out of tissue spaces during iris movement.</li>
          <li><strong>Thickness:</strong> Thickest at collarette (~0.6 mm) and thinnest at iris root (~0.5 mm - site susceptible to iridodialysis during trauma).</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>3. Histological Layers (Anterior to Posterior)</h3>
        <ol>
          <li><strong>Anterior Border Layer:</strong> A condensed layer of fibroblasts and pigmented melanocytes (no true epithelium). Color of iris depends on melanocyte pigment density here.</li>
          <li><strong>Iris Stroma:</strong> Loose collagenous meshwork containing blood vessels, nerves, fibroblasts, mast cells, and <strong>Sphincter Pupillae Muscle</strong> (ring of smooth muscle near pupil margin, 0.75–1 mm wide, innervated by parasympathetic CN III).</li>
          <li><strong>Anterior Pigment Epithelium & Dilator Muscle:</strong> Contains myoepithelial cells forming the <strong>Dilator Pupillae Muscle</strong> (radially arranged, innervated by sympathetic fibers from superior cervical ganglion).</li>
          <li><strong>Posterior Pigment Epithelium:</strong> Heavily pigmented double-layered epithelium that prevents light transmission through iris body. Curled over pupillary margin to form the <em>Pupillary Ruff</em>.</li>
        </ol>
      </div>

      <div class="academic-sec">
        <h3>4. Clinical Correlations</h3>
        <ul>
          <li><strong>Iridocyclitis (Anterior Uveitis):</strong> Inflammation of iris and ciliary body causing aqueous flare/cells, keratic precipitates (KPs), and posterior synechiae.</li>
          <li><strong>Iridodialysis:</strong> Traumatic detachment of the iris root from the ciliary body.</li>
          <li><strong>Rubeosis Iridis:</strong> Neovascularization of the iris surface driven by ischemic retinal conditions (e.g., Diabetic Retinopathy, CRVO).</li>
        </ul>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Wolff's Anatomy of the Eye and Orbit; Kanski's Clinical Ophthalmology.
      </div>
    `
  },
  {
    title: "Ciliary Body (Anatomy, Pars Plana, Pars Plicata & Accommodation)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction</h3>
        <p>The ciliary body is the ring-like middle portion of the uveal tract extending from the scleral spur anteriorly to the ora serrata posteriorly. It is responsible for aqueous humor production and crystalline lens accommodation.</p>
      </div>

      <div class="academic-sec">
        <h3>2. Anatomical Subdivisions</h3>
        <ul>
          <li><strong>Pars Plicata (Corona Ciliaris) [Anterior 2 mm]:</strong> Contains 70 to 80 prominent radial vascular folds called <em>Ciliary Processes</em>. Main site of aqueous humor secretion and origin of zonules of Zinn.</li>
          <li><strong>Pars Plana (Orbiculus Ciliaris) [Posterior 4 mm]:</strong> Smooth, relatively avascular tissue extending from ciliary processes to ora serrata. Preferred surgical entry site for posterior segment vitrectomy (vitreoretinal surgery).</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>3. Histological Structure & Ciliary Muscle</h3>
        <ul>
          <li><strong>Ciliary Epithelium:</strong> Bilayered epithelium lining ciliary body:
            <ul>
              <li><em>Outer Pigmented Epithelium:</em> Continuous posteriorly with RPE.</li>
              <li><em>Inner Non-Pigmented Epithelium:</em> Continuous posteriorly with neurosensory retina. Active secretion of aqueous humor occurs here via Na+/K+ ATPase pumps.</li>
            </ul>
          </li>
          <li><strong>Ciliary Muscle:</strong> Smooth muscle innervated by parasympathetic fibers (CN III via short ciliary nerves). Composed of 3 fiber groups:
            <ul>
              <li><em>Longitudinal (Brucke's) Fibers:</em> Outer fibers attaching to scleral spur.</li>
              <li><em>Radial fibers:</em> Intermediary transition fibers.</li>
              <li><em>Circular (Muller's) Fibers:</em> Inner ring fibers acting as a sphincter during accommodation.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>4. Mechanism of Accommodation (Helmholtz Theory)</h3>
        <p>Upon near focus, ciliary muscle contracts &rarr; ciliary ring diameter narrows &rarr; zonular tension relaxes &rarr; anterior/posterior surfaces of crystalline lens become more spherical (increased curvature) &rarr; lens refractive power increases.</p>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Adler's Physiology of the Eye; Duane's Clinical Ophthalmology.
      </div>
    `
  },
  {
    title: "Anterior & Posterior Chambers (Volumes, Boundaries & Fluid Dynamics)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction</h3>
        <p>The anterior and posterior chambers are fluid-filled spaces within the anterior segment of the eye filled with continuously circulating aqueous humor.</p>
      </div>

      <div class="academic-sec">
        <h3>2. Comparative Parameters Table</h3>
        <table class="param-table">
          <tr><th>Parameter</th><th>Anterior Chamber (AC)</th><th>Posterior Chamber (PC)</th></tr>
          <tr><td>Anterior Boundary</td><td>Corneal Endothelium</td><td>Posterior surface of Iris</td></tr>
          <tr><td>Posterior Boundary</td><td>Anterior surface of Iris & Central Lens</td><td>Anterior surface of Vitreous & Lens Capsule</td></tr>
          <tr><td>Peripheral Boundary</td><td>Trabecular Meshwork & Ciliary Body Band</td><td>Inner surface of Ciliary Body processes</td></tr>
          <tr><td>Fluid Volume</td><td>~0.25 mL (250 µL)</td><td>~0.06 mL (60 µL)</td></tr>
          <tr><td>Central Depth</td><td>3.0 to 3.5 mm</td><td>Not clinically applicable (narrow space)</td></tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>3. Aqueous Humor Flow Dynamics</h3>
        <p>Aqueous humor is secreted by non-pigmented ciliary epithelium into the <strong>Posterior Chamber</strong> &rarr; flows through pupillary aperture into <strong>Anterior Chamber</strong> &rarr; drains via Trabecular Meshwork (Conventional outflow ~80-90%) and Uveoscleral pathway (Unconventional outflow ~10-20%).</p>
      </div>

      <div class="academic-sec">
        <h3>4. Clinical Correlations</h3>
        <ul>
          <li><strong>Shallow Anterior Chamber:</strong> Prerequisite risk factor for primary angle-closure glaucoma and traumatic lens subluxation.</li>
          <li><strong>Hyphema:</strong> Accumulation of blood in the anterior chamber usually caused by blunt ocular trauma damaging iris or ciliary body vessels.</li>
          <li><strong>Hypopyon:</strong> Accumulation of inflammatory pus/leukocytes in the lower part of anterior chamber accompanying severe keratitis or endophthalmitis.</li>
        </ul>
      </div>

      <div class="ref-box">
        <strong>References:</strong> AK Khurana Comprehensive Ophthalmology; American Academy of Ophthalmology (BCSC Section 2).
      </div>
    `
  },
  {
    title: "Crystalline Lens (Anatomy, Layers, Cataractogenesis & Physiology)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction & Physical Parameters</h3>
        <p>The crystalline lens is an biconvex, transparent, elastic, avascular structure suspended behind the iris by the zonules of Zinn. It provides approximately +15.00 D to +20.00 D (~25–30%) of the eye's total refractive power and is responsible for accommodation.</p>
        <table class="param-table">
          <tr><th>Anatomical Parameter</th><th>Exact Clinical Value</th></tr>
          <tr><td>Refractive Index</td><td>1.386 (Cortex) to 1.406 (Equatorial Nucleus)</td></tr>
          <tr><td>Refractive Power (Unaccommodated)</td><td>+18.00 D to +20.00 D</td></tr>
          <tr><td>Equatorial Diameter</td><td>9.0 to 10.0 mm (Adult)</td></tr>
          <tr><td>Anteroposterior Thickness</td><td>3.5 to 4.0 mm (Increases with age)</td></tr>
          <tr><td>Weight</td><td>~135 mg (Infant) to ~255 mg (80-year-old)</td></tr>
          <tr><td>Water Content</td><td>~65% (Lowest water content of any organ)</td></tr>
          <tr><td>Protein Content</td><td>~35% (Highest protein concentration in human body - Crystallins α, β, γ)</td></tr>
        </table>
      </div>

      <div class="academic-sec">
        <h3>2. Histological Structure & Layers</h3>
        <ol>
          <li><strong>Lens Capsule:</strong> A thick, transparent, elastic basement membrane synthesized by lens epithelium. Thickest at anterior pre-equatorial region; thinnest at posterior pole (~3 µm).</li>
          <li><strong>Anterior Lens Epithelium:</strong> Single layer of cuboidal cells beneath anterior capsule. Cells migrate toward the equator, elongate, lose organelles/nuclei, and transform into secondary lens fibers. (No posterior epithelium exists in adults).</li>
          <li><strong>Lens Fibers & Cortex:</strong> Concentric layers of hexagonal fiber cells linked by gap junctions. Newly formed outer layers constitute the <em>Cortex</em>.</li>
          <li><strong>Nucleus:</strong> Central dense core formed continuously throughout life:
            <ul>
              <li><em>Embryonic Nucleus:</em> Formed before 3rd month of gestation (Primary fibers).</li>
              <li><em>Fetal Nucleus:</em> Formed from 3rd month to birth (shows 'Y' sutures).</li>
              <li><em>Infantile Nucleus:</em> Formed from birth to puberty.</li>
              <li><em>Adult Nucleus:</em> Formed after puberty.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div class="academic-sec">
        <h3>3. Lens Physiology & Metabolism</h3>
        <ul>
          <li><strong>Avascular Nutrition:</strong> Receives all nutrients (glucose, amino acids) via diffusion from aqueous humor.</li>
          <li><strong>Metabolism:</strong> 80% glucose metabolized via Anaerobic Glycolysis (Embden-Meyerhof pathway), 15% via Hexose Monophosphate (HMP) Shunt, and minimal via Sorbitol pathway under hyperglycemic conditions.</li>
          <li><strong>Glutathione & Transparency:</strong> High glutathione concentrations maintain lens proteins (crystallins) in a reduced state to prevent oxidative stress and protein aggregation.</li>
        </ul>
      </div>

      <div class="academic-sec">
        <h3>4. Clinical Correlations</h3>
        <ul>
          <li><strong>Cataract:</strong> Opacification of the crystalline lens caused by protein denaturation, oxidative damage, or osmotic disruption (e.g., Nuclear Sclerotic, Cortical, Posterior Subcapsular).</li>
          <li><strong>Presbyopia:</strong> Age-related loss of accommodative power due to progressive hardening of lens nucleus and loss of capsular elasticity.</li>
          <li><strong>Ectopia Lentis:</strong> Dislocation or subluxation of lens due to zonular weakness/disruption (e.g., Marfan syndrome, Homocystinuria).</li>
        </ul>
      </div>

      <div class="ref-box">
        <strong>References:</strong> Adler's Physiology of the Eye (11th Ed.); Lens and Cataract (AAO BCSC Section 11); AK Khurana.
      </div>
    `
  },
  {
    title: "Aqueous Humor (Composition, Formation, Outflow Pathways & IOP)",
    htmlContent: `
      <div class="academic-sec">
        <h3>1. Introduction</h3>
        <p>Aqueous humor is a clear, transparent intraocular fluid produced by the ciliary body that fills the anterior and posterior chambers. It maintains Intraocular Pressure (IOP), maintains ocular shape, and supplies oxygen/nutrients to avascular structures (Cornea & Lens).</p>
      </div>

      <div class="academic-sec">
        <h3>2. Formation & Secretion Mechanisms</h3>
        <p>Aqueous humor is produced at a rate of <strong>2.0 to 2.5 µL/min</strong> by non-pigmented ciliary epithelium via three physiological mechanisms:</p>
        <ul>
          <li><strong>Active Secretion (80–90%):</strong> Primary mechanism. Selective transport of Na+, Cl-, HCO3- ions across non-pigmented epithelium against concentration gradients via Na+/K+ ATPase and Carbonic Anhydrase enzymes. Water follows osmotically.</li>
          <li><strong>Ultrafiltration:</strong> Pressure-driven movement of water and small solutes across fenestrated ciliary capillaries.</li>
          <li><strong>Simple Diffusion:</strong> Lipid-soluble substances move alo
