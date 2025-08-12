import { resumeData } from '../data/resumeData';

export default function Industries() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Industry Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Proven leadership across diverse company stages and industry sectors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.description}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500 uppercase underline tracking-wide mb-2">
                    Key Roles
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {industry.roles}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase underline tracking-wide mb-2">
                    Areas of Expertise
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {industry.areas}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
