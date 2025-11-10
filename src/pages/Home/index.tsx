import ProfileImg from 'assets/profile.webp';
import GitHub from 'assets/github';
import Linkedin from 'assets/linkedin';
import { useTranslation } from 'react-i18next';

const BIRTH_YEAR = 1994;

// Calcula idade dinamicamente
const calculateAge = (birthYear: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

export default function Home() {
  const { t } = useTranslation('global');
  const age = calculateAge(BIRTH_YEAR);

  const skills = ['React', 'TypeScript', 'Node.js', 'AWS', 'React Native', 'Micro Frontend'];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Card */}
      <div className="relative w-full max-w-4xl">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/50">
          <div className="flex flex-col lg:flex-row">
            {/* Profile Image Section */}
            <div className="lg:w-1/3 flex items-center justify-center p-8 lg:p-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white/50 shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                  src={ProfileImg}
                  alt="Rômulo Rocha"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3 p-8 lg:p-10 flex flex-col justify-between">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-1 text-xs font-semibold text-purple-300 bg-purple-500/30 rounded-full border border-purple-400/30 backdrop-blur-sm">
                    {t('TITLE')}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 leading-tight">
                  {t('NAME')}
                </h1>

                <h2 className="text-xl lg:text-2xl font-semibold text-blue-200">
                  {t('SUBTITLE')}
                </h2>

                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {t('FULL_DESCRIPTION')}
                </p>
              </div>

              {/* Skills Badges */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-3 font-semibold">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/20 rounded-lg border border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Info */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <p className="text-white font-medium text-lg">
                      {age} {t('AGE')} • {t('LOCATION')}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Desenvolvedor desde 2017
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/romulo94"
                      target="_blank"
                      rel="noreferrer"
                      className="group relative"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                      <div className="relative p-3 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                        <GitHub size={24} />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/romulo-rocha-de-oliveira"
                      target="_blank"
                      rel="noreferrer"
                      className="group relative"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                      <div className="relative p-3 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                        <Linkedin size={24} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
