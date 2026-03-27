import { createPluginRegistration } from '@embedpdf/core';
import { EmbedPDF } from '@embedpdf/core/react';
import { usePdfiumEngine } from '@embedpdf/engines/react';
import { ExportPluginPackage } from '@embedpdf/plugin-export/react'
import { useExport } from '@embedpdf/plugin-export/react';

// Icons
import { LuDownload } from "react-icons/lu";




// Import the essential plugins
import { Viewport, ViewportPluginPackage } from '@embedpdf/plugin-viewport/react';
import { Scroller, ScrollPluginPackage } from '@embedpdf/plugin-scroll/react';
import {
  DocumentContent,
  DocumentManagerPluginPackage,
} from '@embedpdf/plugin-document-manager/react';
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/react';

import ResumePdf from "../../assets/ankit-resume.pdf";

// 1. Register the plugins you need
const plugins = [
  createPluginRegistration(DocumentManagerPluginPackage, {
    initialDocuments: [{ url: ResumePdf }],
  }),
  createPluginRegistration(ViewportPluginPackage),
  createPluginRegistration(ScrollPluginPackage),
  createPluginRegistration(RenderPluginPackage),
  // Register the export plugin
  createPluginRegistration(ExportPluginPackage, {
    defaultFileName: 'ankitbhagat-resume.pdf',
  }),
];

const ExportToolbar = ({ documentId }: { documentId: string }) => {
  const { provides: exportApi } = useExport(documentId)
  return (
    <div className="w-full px-5 flex justify-between items-center dark:bg-black">
      <p></p>
      <button
        onClick={() => exportApi?.download()}
        disabled={!exportApi}
        className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-zinc-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <LuDownload />
      </button>
    </div>
  )
}

export const PDFViewer = () => {
  // 2. Initialize the engine with the React hook
  const { engine, isLoading } = usePdfiumEngine();

  if (isLoading || !engine) {
    return <div>Loading PDF Engine...</div>;
  }

  // 3. Wrap your UI with the <EmbedPDF> provider
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <EmbedPDF engine={engine} plugins={plugins}>
        {({ activeDocumentId }) =>
          activeDocumentId && (
            <DocumentContent documentId={activeDocumentId}>
              {({ isLoaded }) =>
                isLoaded && (

                  <Viewport
                    documentId={activeDocumentId}
                  >
                    <ExportToolbar documentId={activeDocumentId} />
                    <Scroller
                      documentId={activeDocumentId}
                      renderPage={({ pageIndex }) => (
                        <div className='w-96 md:w-full h-fit'>
                          {/* The RenderLayer is responsible for drawing the page */}
                          <RenderLayer
                            documentId={activeDocumentId}
                            pageIndex={pageIndex}
                            className='bg-black border-2 rounded-2xl'
                          />
                        </div>
                      )}
                    />
                  </Viewport>
                )
              }
            </DocumentContent>
          )
        }
      </EmbedPDF>
    </div>
  );
};