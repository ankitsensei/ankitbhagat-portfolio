import { createPluginRegistration } from '@embedpdf/core';
import { EmbedPDF } from '@embedpdf/core/react';
import { usePdfiumEngine } from '@embedpdf/engines/react';

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
];

export const PDFViewer = () => {
  // 2. Initialize the engine with the React hook
  const { engine, isLoading } = usePdfiumEngine();

  if (isLoading || !engine) {
    return <div>Loading PDF Engine...</div>;
  }

  // 3. Wrap your UI with the <EmbedPDF> provider
  return (
    <div>
      <EmbedPDF engine={engine} plugins={plugins}>
        {({ activeDocumentId }) =>
          activeDocumentId && (
            <DocumentContent documentId={activeDocumentId}>
              {({ isLoaded }) =>
                isLoaded && (
                  <Viewport
                    documentId={activeDocumentId}
                  >
                    <Scroller
                      documentId={activeDocumentId}
                      renderPage={({ width, height, pageIndex }) => (
                        <div style={{ width, height }}>
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