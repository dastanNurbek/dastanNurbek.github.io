import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Activities() {
  const [showISSonVIS, setShowISSonVIS] = useState(false);
  const [showAI4EO, setShowAI4EO] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const ConferenceItem = ({ 
    title, 
    organization, 
    description, 
    location, 
    year, 
    isPresentation, 
    details, 
    showDetails, 
    setShowDetails 
  }) => (
    <div className="mb-10 last:mb-0">
      <div className="flex items-start gap-2">
        <h1 className="leading-tight">
          <span className="font-bold">{title}</span>, {organization}
        </h1>
        {isPresentation && (
          <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-tighter shrink-0 mt-0.5">
            Presenter
          </span>
        )}
      </div>
      
      {description && <p className="py-2 text-sm">{description}</p>}
      
      {details && (
        <div className="pt-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 mb-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Details
            {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-3 text-gray-500">
                  {details}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      
      <p className="text-xs text-gray-400">{location}, {year}</p>
    </div>
  );

  return (
    <div id="activities" className="max-w-[1200px] mx-auto w-full py-12">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">
          Activities
        </h1>

        <motion.div
          className="px-10 sm:pl-20 text-sm col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          {/* Section: Presentations */}
          <ConferenceItem 
            title="The 17th International Coastal Symposium"
            organization="The Journal of Coastal Research (JCR)"
            description="Poster presentation was accepted based on a research paper 'Wave climate analysis of Lake Balkhash using altimetry data'"
            location="Doha"
            year="2024"
            isPresentation={true}
          />

          <ConferenceItem 
            title="FARABI ALEMI 2023"
            organization="Al-Farabi Kazakh National University"
            description="Thesis on 'Observing long-term NOx trends in Almaty city using satellite retrievals' was published and awarded third place."
            location="Almaty"
            year="2023"
            isPresentation={true}
          />

          <ConferenceItem 
            title="AIAC AUES"
            organization="Almaty University of Power Engineering and Telecommunications"
            description="Participated as a speaker on abstract thesis 'Observing long-term NOx trends in Almaty city using satellite retrievals'."
            location="Almaty"
            year="2023"
            isPresentation={true}
          />

          {/* Section: Professional Courses/Symposiums */}
          <div className="border-t border-gray-800 my-10 pt-10">
            <ConferenceItem 
              title="AI4EO 2025"
              organization="International Symposium on AI for Earth Observation"
              location="Rennes, Britanny, France"
              year="2025"
              isPresentation={false}
              showDetails={showAI4EO}
              setShowDetails={setShowAI4EO}
              details={
                <>
                  <p>
                    The AI4EO Symposium held in Rennes on September 11–12 was a great experience 
                    that deepened my understanding of artificial intelligence for Earth Observation. The 
                    program featured four keynote speakers who presented their work on forestry, 
                    foundation models, bias mitigation, and digital twins.
                  </p>
                  <p>
                    I gained new perspectives on self-supervised learning and multi-modal approaches. 
                    I specifically explored the SSL4Eco dataset and research on super-resolution of 
                    GOME-2 data for improved precision in atmospheric studies.
                  </p>
                </>
              }
            />

            <ConferenceItem 
              title="ISSonVIS 2025"
              organization="International Spring School on Visualization"
              location="Palacký University Olomouc"
              year="2025"
              isPresentation={false}
              showDetails={showISSonVIS}
              setShowDetails={setShowISSonVIS}
              details={
                <>
                  <p>
                    Over the course of two days, I gained a broad understanding of how maps and visual 
                    data can be powerful tools for both conveying truth and spreading misinformation. 
                    The sessions covered topics like trust in maps, perception design, and psychology.
                  </p>
                  <p>
                    The course also emphasized ethical considerations in map-making and 
                    explored the growing role of AI in both creating and combating disinformation.
                  </p>
                </>
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Activities;