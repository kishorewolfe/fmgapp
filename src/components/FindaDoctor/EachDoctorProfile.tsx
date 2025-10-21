import React, { useEffect, useState } from "react";
import LanguagesSpoken from "./LanguagesSpoken";
import Image from "next/image";
import "./EachDoctorProfile.css";
import { Metadata } from "next";
import { AddressCard, AddressCardNormal } from "./AddressIcon";
import { PhoneIcon, PhoneIconNormal } from "./PhoneIcon";
import { FaxIcon, FaxIconNormal } from "./FaxIcon";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
};

const EachDoctorProfile = (props) => {
  let { doctor } = props;

  // safe top-level doc extraction (hooks must be declared before any returns)
  const doc = Array.isArray(doctor) && doctor.length > 0 ? doctor[0] : undefined;

  const docName = [
    doc?.FirstName || "",
    doc?.LastName || "",
    doc?.Degree1 || "",
  ]
    .join(" ")
    .trim();

  // document title (safe for SSR) — hook is always called
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prevTitle = document.title;
    if (docName) {
      document.title = `${docName} - My Family Medical Group`;
    }

    return () => {
      document.title = prevTitle;
    };
  }, [docName]);

  // Now it's safe to early-return UI fallbacks
  if (!doc) {
    return (
      <div className="mt-12 p-6">
        <div className="rounded-lg p-6 bg-white dark:bg-slate-800 shadow-md">
          <p className="text-gray-700 dark:text-gray-300">Doctor information is not available.</p>
        </div>
      </div>
    );
  }

  // --- rest of your logic (address, maps, languages, helpers) ---
  // Address construction with safe fallbacks
  let address = "";
  let cityLine = "";
  let address1 = "";
  let cityLine1 = "";
  let address2 = "";
  let cityLine2 = "";

  if (doc?.StreetAddress && doc?.City && doc?.State) {
    address = doc?.Suite ? `${doc.StreetAddress}, ${doc.Suite}` : `${doc.StreetAddress}`;
    cityLine = `${doc.City}, ${doc.State} ${doc.Zip || ""}`.trim();
  }

  if (doc?.StreetAddress1 && doc?.City1 && doc?.State1) {
    address1 = `${doc.StreetAddress1}${doc?.Suite1 ? ", " + doc.Suite1 : ""}`;
    cityLine1 = `${doc.City1}, ${doc.State1} ${doc.Zip1 || ""}`.trim();
  }

  if (doc?.StreetAddress2 && doc?.City2 && doc?.State2) {
    address2 = `${doc.StreetAddress2}${doc?.Suite2 ? ", " + doc.Suite2 : ""}`;
    cityLine2 = `${doc.City2}, ${doc.State2} ${doc.Zip2 || ""}`.trim();
  }

  const phNum = `tel:${doc?.Phone || ""}`;

  // languages — trim, filter empty, add English, dedupe
  const rawLangs = [
    doc?.Language1 ?? "",
    doc?.Language2 ?? "",
    doc?.Language3 ?? "",
  ].map((l) => (typeof l === "string" ? l.trim() : ""));

  const LangSet = new Set<string>();
  LangSet.add("English"); // always include English
  rawLangs.forEach((l) => {
    if (l && l.toLowerCase() !== "english") {
      LangSet.add(l);
    }
  });
  const Langs = Array.from(LangSet);

  // maps urls & embed (only include when non-empty)
  const addrPrimaryForMaps = `${address || ""} ${cityLine || ""}`.trim();
  const mapsUrlPrimary = addrPrimaryForMaps
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addrPrimaryForMaps)}`
    : "";
  const mapsEmbedUrl = addrPrimaryForMaps
    ? `https://www.google.com/maps?q=${encodeURIComponent(addrPrimaryForMaps)}&output=embed`
    : "";

  const addr1ForMaps = `${address1 || ""} ${cityLine1 || ""}`.trim();
  const mapsUrl1 = addr1ForMaps
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr1ForMaps)}`
    : "";

  const addr2ForMaps = `${address2 || ""} ${cityLine2 || ""}`.trim();
  const mapsUrl2 = addr2ForMaps
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr2ForMaps)}`
    : "";

  // Share profile (guard navigator & clipboard)
  const shareProfile = async () => {
    if (typeof window === "undefined") return;
    const shareText = `${docName}\n${doc?.Practice_Name || ""}\n${addrPrimaryForMaps || ""}\n${window.location.href}`;
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      try {
        await (navigator as any).share({ title: docName, text: shareText, url: window.location.href });
        return;
      } catch {
        // fall through to clipboard copy
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareText);
        alert("Profile copied to clipboard");
        return;
      } catch {
        // continue to fallback
      }
    }
    alert("Unable to share profile");
  };

  // small helpers
  const renderPhone = (num: string | undefined) => (num ? num : "—");
  const renderFax = (num: string | undefined) => (num ? num : "—");

  const copyToClipboard = async (text: string) => {
    if (typeof navigator === "undefined" || !navigator.clipboard || !navigator.clipboard.writeText) {
      if (typeof window !== "undefined") alert("Copy not supported");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      if (typeof window !== "undefined") alert("Address copied to clipboard");
    } catch {
      if (typeof window !== "undefined") alert("Copy failed");
    }
  };

  // small UI element: show 'Verified' pill if specialty exists

  return (
    <div className="xs:mt-[20px] lg:mt-[120px] mt-36">
      <div className="bg-gray-50 dark:bg-slate-900 dark:text-white min-h-screen pb-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb linking exactly to requested URL */}
          <div className="flex items-center justify-start gap-3 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <a href="http://localhost:3000/find_doctor?search=&docType=&specialty=" className="opacity-90 hover:underline">
                Find Doctor
              </a>
              <svg className="w-4 h-4 mx-2 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
              <span className="font-medium truncate max-w-xs">{docName}</span>
            </nav>
          </div>

          {/* Main responsive layout; items-stretch to make columns same height */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
            {/* Left column - profile card + map */}
            <div className="md:col-span-4 lg:col-span-3 flex">
              <div className="rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col w-full">
                <div className="p-6 flex flex-col items-center">
                  <div className="relative rounded-full overflow-hidden bg-gray-100 dark:bg-slate-700 w-40 h-40 sm:w-44 sm:h-44 lg:w-56 lg:h-56">
                    <Image
                      src={doc?.image_url || "/images/placeholder/Doc_M_Placeholder.jpg"}
                      alt={`${doc?.FirstName || ""} ${doc?.LastName || ""}`}
                      fill
                      sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 224px"
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>

                  {/* IMPORTANT: make specialty visually prominent */}
                  <p className="mt-3 text-center text-cyan-700 font-semibold text-lg sm:text-xl md:text-xl lg:text-xl leading-tight">
                    {doc?.ContractedSpecialty || "—"}
                  </p>

                  {/* Call + Directions equal width */}
                  <div className="mt-5 w-full flex gap-3">
                    <a
                      href={phNum}
                      className="flex-1 rounded bg-cyan-600 px-4 py-2 text-center text-white hover:bg-cyan-700 transition-colors"
                      aria-label={`Call ${docName}`}
                    >
                      Call
                    </a>
                    <a
                      href={mapsUrlPrimary || "#"}
                      target={mapsUrlPrimary ? "_blank" : undefined}
                      rel={mapsUrlPrimary ? "noopener noreferrer" : undefined}
                      className={`flex-1 rounded border border-gray-200 px-4 py-2 text-center ${mapsUrlPrimary ? "hover:bg-gray-100 dark:hover:bg-slate-700" : "opacity-50 cursor-not-allowed"}`}
                      aria-label={`Directions to ${docName}`}
                    >
                      Directions
                    </a>
                  </div>

                  <hr className="my-6 border-t border-gray-200 dark:border-slate-700 w-full" />

                  <div className="w-full">
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase text-gray-500">Degree</div>
                      <div className="mt-1 font-semibold">{doc?.Degree1 || "—"}</div>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase text-gray-500">Languages</div>
                      <div className="mt-2">
                        <LanguagesSpoken languages={Langs} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map container with soft edges & padding */}
                <div className="p-3">
                  <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm h-48 sm:h-56 md:h-64 lg:h-72">
                    {addrPrimaryForMaps ? (
                      <iframe
                        title={`${docName} location`}
                        src={mapsEmbedUrl}
                        style={{ width: "100%", height: "100%", border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">Address not available</div>
                    )}
                  </div>

                  {/* map helpers */}
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => copyToClipboard(addrPrimaryForMaps)}
                      className="flex-1 rounded border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                      disabled={!addrPrimaryForMaps}
                    >
                      Copy address
                    </button>
                    <button
                      onClick={() => shareProfile()}
                      className="rounded border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - details (stretch to same height) */}
            <div className="md:col-span-8 lg:col-span-9 flex">
              <div className="rounded-lg p-6 bg-white dark:bg-slate-800 shadow-md transition-shadow duration-200 flex-1 flex flex-col">
                {/* Top rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <dl className="text-gray-900 dark:text-white">
                      <div className="mb-4">
                        <dt className="text-xs text-gray-500 uppercase">First name</dt>
                        <dd className="text-lg font-semibold">{doc?.FirstName || "—"}</dd>
                      </div>
                      <div className="mb-4">
                        <dt className="text-xs text-gray-500 uppercase">Last name</dt>
                        <dd className="text-lg font-semibold">{doc?.LastName || "—"}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <dl className="text-gray-900 dark:text-white">
                      <div className="mb-4">
                        <dt className="text-xs text-gray-500 uppercase">Specialty(ies)</dt>
                        <dd className="text-lg font-semibold">{doc?.ContractedSpecialty || "—"}</dd>
                      </div>
                      <div className="mb-4">
                        <dt className="text-xs text-gray-500 uppercase">Organization</dt>
                        <dd className="text-lg font-semibold">{doc?.Practice_Name || "—"}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Location and contact rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div>
                    <dl className="text-gray-900 dark:text-white">
                      <div className="mb-4">
                        <dt className="text-xs text-gray-500 uppercase">City</dt>
                        <dd className="text-lg font-semibold">{doc?.City || "—"}</dd>
                      </div>
                      <div className="mb-4">
                        <dt className="text-xs text-gray-500 uppercase">State</dt>
                        <dd className="text-lg font-semibold">{doc?.State || "—"}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <dl className="text-gray-900 dark:text-white">
                      <div className="mb-4">
                        <dt className="text-xs text-gray-500 uppercase">Zip code</dt>
                        <dd className="text-lg font-semibold">{doc?.Zip || "—"}</dd>
                      </div>
                      <div className="mb-4">
                        <dt className="text-xs text-gray-500 uppercase">Country</dt>
                        <dd className="text-lg font-semibold">United States</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Addresses block - primary + always-open secondary addresses */}
                <div className="mt-6 flex-1 overflow-auto">
                  <div className="mb-2 text-lime-600 dark:text-lime-600 font-semibold">ADDRESS</div>

                  {/* Primary address */}
                  <div className="mt-3 rounded-md border border-gray-100 dark:border-slate-700 p-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <span className="hidden dark:block"><AddressCard /></span>
                        <span className="block dark:hidden"><AddressCardNormal /></span>
                      </div>

                      <div className="flex-1">
                        <a href={mapsUrlPrimary || "#"} target={mapsUrlPrimary ? "_blank" : undefined} rel={mapsUrlPrimary ? "noopener noreferrer" : undefined} className="block hover:underline">
                          <p className="font-medium">{address || "—"}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{cityLine || "—"}</p>
                        </a>

                        <div className="mt-3 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="hidden dark:block"><PhoneIcon /></span>
                            <span className="block dark:hidden"><PhoneIconNormal /></span>
                            <span className="text-sm">{renderPhone(doc?.Phone)}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="hidden dark:block"><FaxIcon /></span>
                            <span className="block dark:hidden"><FaxIconNormal /></span>
                            <span className="text-sm">{renderFax(doc?.Fax)}</span>
                          </div>

                          <div className="mt-3 flex gap-2">
                            <button
                              onClick={() => copyToClipboard(`${address} ${cityLine}`)}
                              className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                              disabled={!address && !cityLine}
                            >
                              Copy address
                            </button>
                            <button onClick={() => shareProfile()} className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">Share</button>
                            <a href={mapsUrlPrimary || "#"} target={mapsUrlPrimary ? "_blank" : undefined} rel={mapsUrlPrimary ? "noopener noreferrer" : undefined} className="ml-auto text-sm text-cyan-600 hover:underline">
                              Open in Maps
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary address 1 - always visible */}
                  {address1 && (
                    <div className="mt-4 rounded-md border border-gray-100 dark:border-slate-700 p-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <span className="hidden dark:block"><AddressCard /></span>
                          <span className="block dark:hidden"><AddressCardNormal /></span>
                        </div>

                        <div className="flex-1">
                          <div className="font-medium">{address1}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{cityLine1}</div>

                          <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="hidden dark:block"><PhoneIcon /></span>
                              <span className="block dark:hidden"><PhoneIconNormal /></span>
                              <span className="text-sm">{renderPhone(doc?.Phone1)}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="hidden dark:block"><FaxIcon /></span>
                              <span className="block dark:hidden"><FaxIconNormal /></span>
                              <span className="text-sm">{renderFax(doc?.Fax1)}</span>
                            </div>

                            <div className="mt-3 flex gap-2">
                              <button onClick={() => copyToClipboard(`${address1} ${cityLine1}`)} className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">Copy</button>
                              <a href={mapsUrl1 || "#"} target={mapsUrl1 ? "_blank" : undefined} rel={mapsUrl1 ? "noopener noreferrer" : undefined} className="ml-auto text-sm text-cyan-600 hover:underline">Open in Maps</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Secondary address 2 - always visible */}
                  {address2 && (
                    <div className="mt-4 rounded-md border border-gray-100 dark:border-slate-700 p-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <span className="hidden dark:block"><AddressCard /></span>
                          <span className="block dark:hidden"><AddressCardNormal /></span>
                        </div>

                        <div className="flex-1">
                          <div className="font-medium">{address2}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{cityLine2}</div>

                          <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="hidden dark:block"><PhoneIcon /></span>
                              <span className="block dark:hidden"><PhoneIconNormal /></span>
                              <span className="text-sm">{renderPhone(doc?.Phone2)}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="hidden dark:block"><FaxIcon /></span>
                              <span className="block dark:hidden"><FaxIconNormal /></span>
                              <span className="text-sm">{renderFax(doc?.Fax2)}</span>
                            </div>

                            <div className="mt-3 flex gap-2">
                              <button onClick={() => copyToClipboard(`${address2} ${cityLine2}`)} className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">Copy</button>
                              <a href={mapsUrl2 || "#"} target={mapsUrl2 ? "_blank" : undefined} rel={mapsUrl2 ? "noopener noreferrer" : undefined} className="ml-auto text-sm text-cyan-600 hover:underline">Open in Maps</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom area intentionally minimal */}
                <div className="mt-6 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <strong>Have any questions?</strong>
                    <p>
                      Feel free to{' '}
                      <a href="/contactus" className="text-blue-600 hover:underline dark:text-blue-400">
                        contact us
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default EachDoctorProfile;
