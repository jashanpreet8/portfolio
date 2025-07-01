export default function ResumePage() {
    return (
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center">My Resume</h2>
  
        {/* Embedded PDF viewer */}
        <div className="mt-8 shadow-lg rounded overflow-hidden">
          <iframe
            src="/resume.pdf"
            width="100%"
            height="800px"
            className="border-0"
            title="Resume"
          />
        </div>
  
        {/* Download link */}
        <div className="mt-6 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </section>
    )
  }
  