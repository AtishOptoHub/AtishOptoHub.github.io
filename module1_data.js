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
