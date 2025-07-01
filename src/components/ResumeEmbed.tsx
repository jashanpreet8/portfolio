export default function ResumeEmbed() {
    return (
      <div className="h-full flex flex-col items-center justify-center px-4">
        <iframe
          src="/resume.pdf"
          width="80%"
          height="70%"
          className="border shadow-lg rounded"
          title="Resume"
        />
        <a href="/resume.pdf" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Download Resume
        </a>
      </div>
    );
  }
  