window.RAG_DEBUG_FLINT_OPTION = {
  "tooltip": {
    "trigger": "item",
    "triggerOn": "mousemove"
  },
  "series": [
    {
      "type": "graph",
      "layout": "none",
      "data": [
        {
          "name": "RAG answer is wrong",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#5470c6"
          },
          "x": 760,
          "y": 70,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "RAG answer is wrong",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Correct info in source docs?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#91cc75"
          },
          "x": 760,
          "y": 170,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Correct info in source docs?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Fix or refresh source documents",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#fac858"
          },
          "x": 315,
          "y": 300,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Fix or refresh source documents",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Inspect retrieval",
          "value": 2,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#ee6666"
          },
          "x": 760,
          "y": 300,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Inspect retrieval",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Correct chunks retrieved?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#73c0de"
          },
          "x": 760,
          "y": 430,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Correct chunks retrieved?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Debug retrieval pipeline",
          "value": 2,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#3ba272"
          },
          "x": 505,
          "y": 560,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Debug retrieval pipeline",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Inspect generation",
          "value": 2,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#fc8452"
          },
          "x": 980,
          "y": 560,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Inspect generation",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Documents parsed correctly?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#9a60b4"
          },
          "x": 365,
          "y": 690,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Documents parsed correctly?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Fix extraction",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#ea7ccc"
          },
          "x": 165,
          "y": 820,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Fix extraction",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Check chunking and metadata",
          "value": 2,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#d48265"
          },
          "x": 560,
          "y": 820,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Check chunking and metadata",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Chunks too large, small, or split badly?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#749f83"
          },
          "x": 560,
          "y": 950,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Chunks too large, small, or split badly?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Fix chunk size and overlap",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#ca8622"
          },
          "x": 330,
          "y": 1080,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Fix chunk size and overlap",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Embeddings regenerated?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#bda29a"
          },
          "x": 660,
          "y": 1080,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Embeddings regenerated?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Rebuild embeddings",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#6e7074"
          },
          "x": 500,
          "y": 1210,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Rebuild embeddings",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Vector index updated?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#546570"
          },
          "x": 825,
          "y": 1210,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Vector index updated?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Rebuild index",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#c4ccd3"
          },
          "x": 690,
          "y": 1340,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Rebuild index",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Check search, filters and ranking",
          "value": 2,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#4b565b"
          },
          "x": 960,
          "y": 1340,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Check search, filters and ranking",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Stale or irrelevant chunks returned?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#2f4554"
          },
          "x": 960,
          "y": 1470,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Stale or irrelevant chunks returned?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Fix filters, metadata, deletion and versioning",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#61a0a8"
          },
          "x": 760,
          "y": 1600,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Fix filters, metadata, deletion and versioning",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Inspect reranking, query rewriting and hybrid search",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#c23531"
          },
          "x": 1185,
          "y": 1600,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Inspect reranking, query rewriting and hybrid search",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Prompt included retrieved context?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#5470c6"
          },
          "x": 965,
          "y": 690,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Prompt included retrieved context?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Fix prompt or context injection",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#91cc75"
          },
          "x": 815,
          "y": 820,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Fix prompt or context injection",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Model followed context?",
          "value": 3,
          "symbolSize": 24,
          "itemStyle": {
            "color": "#fac858"
          },
          "x": 1035,
          "y": 820,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Model followed context?",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Improve prompt, citations, or model choice",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#ee6666"
          },
          "x": 910,
          "y": 950,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Improve prompt, citations, or model choice",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        },
        {
          "name": "Check source quality and conflicting docs",
          "value": 1,
          "symbolSize": 13,
          "itemStyle": {
            "color": "#73c0de"
          },
          "x": 1115,
          "y": 950,
          "fixed": true,
          "label": {
            "show": true,
            "formatter": "Check source quality and conflicting docs",
            "color": "#0f172a",
            "fontSize": 12,
            "fontWeight": 700,
            "position": "right",
            "overflow": "break",
            "width": 150,
            "backgroundColor": "rgba(248,250,252,0.82)",
            "borderRadius": 4,
            "padding": [
              2,
              4
            ]
          }
        }
      ],
      "links": [
        {
          "source": "RAG answer is wrong",
          "target": "Correct info in source docs?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Correct info in source docs?",
          "target": "Fix or refresh source documents",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Correct info in source docs?",
          "target": "Inspect retrieval",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Inspect retrieval",
          "target": "Correct chunks retrieved?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Correct chunks retrieved?",
          "target": "Debug retrieval pipeline",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Correct chunks retrieved?",
          "target": "Inspect generation",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Debug retrieval pipeline",
          "target": "Documents parsed correctly?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Documents parsed correctly?",
          "target": "Fix extraction",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Documents parsed correctly?",
          "target": "Check chunking and metadata",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Check chunking and metadata",
          "target": "Chunks too large, small, or split badly?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Chunks too large, small, or split badly?",
          "target": "Fix chunk size and overlap",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Chunks too large, small, or split badly?",
          "target": "Embeddings regenerated?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Embeddings regenerated?",
          "target": "Rebuild embeddings",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Embeddings regenerated?",
          "target": "Vector index updated?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Vector index updated?",
          "target": "Rebuild index",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Vector index updated?",
          "target": "Check search, filters and ranking",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Check search, filters and ranking",
          "target": "Stale or irrelevant chunks returned?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Stale or irrelevant chunks returned?",
          "target": "Fix filters, metadata, deletion and versioning",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Stale or irrelevant chunks returned?",
          "target": "Inspect reranking, query rewriting and hybrid search",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Inspect generation",
          "target": "Prompt included retrieved context?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Prompt included retrieved context?",
          "target": "Fix prompt or context injection",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Prompt included retrieved context?",
          "target": "Model followed context?",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Model followed context?",
          "target": "Improve prompt, citations, or model choice",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        },
        {
          "source": "Model followed context?",
          "target": "Check source quality and conflicting docs",
          "value": 1,
          "lineStyle": {
            "width": 1.4
          }
        }
      ],
      "roam": true,
      "label": {
        "show": true,
        "color": "#0f172a",
        "fontSize": 12,
        "fontWeight": 700,
        "position": "right",
        "overflow": "break",
        "width": 152
      },
      "lineStyle": {
        "color": "#93a8d8",
        "opacity": 0.72,
        "curveness": 0.08,
        "width": 1.7
      },
      "emphasis": {
        "focus": "adjacency"
      },
      "circular": {
        "rotateLabel": true
      },
      "force": {
        "repulsion": 180,
        "edgeLength": [
          50,
          130
        ],
        "gravity": 0.08
      },
      "left": 96,
      "right": 160,
      "top": 92,
      "bottom": 34,
      "itemStyle": {
        "color": "#5470c6"
      },
      "coordinateSystem": null,
      "draggable": false,
      "edgeSymbol": [
        "none",
        "arrow"
      ],
      "edgeSymbolSize": 8,
      "_flintLayeredLayout": true
    }
  ],
  "color": [
    "#5470c6",
    "#91cc75",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ba272",
    "#fc8452",
    "#9a60b4",
    "#ea7ccc",
    "#d48265",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3",
    "#4b565b",
    "#2f4554",
    "#61a0a8",
    "#c23531"
  ],
  "_width": 815,
  "_height": 815,
  "_dataLength": 24,
  "title": {
    "text": "RAG Debugging Decision Tree",
    "subtext": "Do not start with the LLM. Start with the evidence the LLM received.",
    "left": "center",
    "top": 12,
    "textStyle": {
      "color": "#0f172a",
      "fontSize": 24,
      "fontWeight": 800
    },
    "subtextStyle": {
      "color": "#475569",
      "fontSize": 14,
      "fontWeight": 600
    }
  },
  "backgroundColor": "#f8fafc"
};
