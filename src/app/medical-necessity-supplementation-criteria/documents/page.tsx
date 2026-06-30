import Link from "next/link";

const documents = [
  {
    category: "PLACEHOLDER",
    file: "/documents/tobeadded.pdf",
  },
  {
    category: "PLACEHOLDER",
    file: "/documents/tobeadded.pdf",
  },
  {
    category: "PLACEHOLDER",
    file: "/documents/tobeadded.pdf",
  },
  {
    category: "PLACEHOLDER",
    file: "/documents/tobeadded.pdf",
  },
  {
    category: "PLACEHOLDER",
    file: "/documents/tobeadded.pdf",
  },
];

const sortedDocuments = [...documents].sort((a, b) =>
  a.category.localeCompare(b.category)
);

export default function MedicalNecessitySupplementationCriteria() {
  return (
    <section className=" pt-40 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">

        {/* Header */}
        <div className="border-b border-gray-200 p-8 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-lime-600 dark:text-white">
            Medical Necessity Supplementation Criteria
          </h1>

          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Evidence-based criteria by service category.
          </p>

          <p className="mt-5 text-justify leading-8 text-gray-700 dark:text-gray-300">
            Browse Medical Necessity Supplementation Criteria by service
            category. Documents are listed alphabetically and are provided as
            PDF files that open directly in your browser for convenient viewing.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-lime-50 dark:bg-gray-800">

              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                  Service Category
                </th>

                <th className="w-40 px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                  View
                </th>

                <th className="w-40 px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                  Download
                </th>
              </tr>

            </thead>

            <tbody>

              {sortedDocuments.map((doc) => (
                <tr
                  key={doc.category}
                  className="border-t border-gray-200 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  <td className="px-6 py-5 font-medium text-gray-800 dark:text-gray-100">
                    {doc.category}
                  </td>

                  <td className="px-6 py-5 text-center">

                    <Link
                      href={doc.file}
                      target="_blank"
                      className="rounded-lg bg-lime-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-lime-700"
                    >
                      View PDF
                    </Link>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <a
                      href={doc.file}
                      download
                      className="rounded-lg border border-lime-600 px-4 py-2 text-sm font-medium text-lime-600 transition hover:bg-lime-50 dark:hover:bg-gray-800"
                    >
                      Download
                    </a>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">

          <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
            Documents on this page are reviewed periodically and may be updated
            as clinical criteria change. Please refer to the latest available
            version when reviewing Medical Necessity Supplementation Criteria.
          </p>

        </div>

      </div>
    </section>
  );
}