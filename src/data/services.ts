export interface ServiceCategory {
  number: string;
  slug: string;
  title: string;
  focus: string;
  bottleneck: string;
  service: string;
  deliverables: string[];
  steps: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    number: '01',
    slug: 'research-translation-commercialization',
    title: 'Research Translation & Commercialization',
    focus: '學術成果轉化、研究成果商業化、產學合作',
    bottleneck: '研究成果已經形成，但應用情境、合作對象與商業化路徑還沒有對齊。',
    service: '梳理研究成果可支持的主張，盤點可能的應用情境與合作角色，再把商業化選項整理成可討論的路徑。',
    deliverables: ['研究成果與應用情境對照', '合作角色與需求初稿', '商業化路徑與待驗證假設'],
    steps: ['整理成果、證據與使用限制', '對照應用情境及利害關係人', '比較合作、授權或產品化等可能路徑'],
  },
  {
    number: '02',
    slug: 'research-design-development',
    title: 'Research Design & Development',
    focus: '研究問題釐清、研究設計、研究計畫落實',
    bottleneck: '研究目標很重要，但研究問題、方法、資源與執行節點尚未形成一致計畫。',
    service: '從研究目的與現有證據出發，釐清問題範圍、研究方法、所需資源及階段檢核方式。',
    deliverables: ['研究問題與範圍摘要', '研究設計與方法選項', '執行節點、依賴條件與檢核清單'],
    steps: ['釐清目標、問題與限制', '比較可行的研究設計與方法', '整理執行計畫及階段檢核點'],
  },
  {
    number: '03',
    slug: 'intellectual-property-technology-transfer',
    title: 'Intellectual Property & Technology Transfer',
    focus: '智慧財產權、技術移轉、技術授權',
    bottleneck: '技術內容、權利狀態、合作限制與移轉對象需要先釐清，才能討論後續安排。',
    service: '盤點技術與文件脈絡，整理待確認的權利、揭露與合作問題，並協助梳理移轉或授權討論所需資訊。',
    deliverables: ['技術與相關資料清單', '權利及合作待確認問題', '移轉或授權洽談資訊架構'],
    steps: ['整理技術內容、貢獻來源與現有文件', '列出需由權責單位或專業人士確認的事項', '依目標對象準備技術移轉或授權溝通材料'],
  },
  {
    number: '04',
    slug: 'product-innovation-development',
    title: 'Product Innovation & Development',
    focus: '產品創新、產品開發、概念驗證',
    bottleneck: '技術能力尚未轉成清楚的產品問題、需求規格或可檢驗的概念。',
    service: '由使用情境與需求出發，整理產品概念、關鍵功能與待驗證假設，再規劃適合的概念或原型測試。',
    deliverables: ['產品概念與使用情境', '需求與功能假設', '概念驗證或原型測試計畫'],
    steps: ['界定使用者、情境與待解決問題', '整理產品概念與必要功能', '規劃概念驗證並依觀察結果修正'],
  },
  {
    number: '05',
    slug: 'market-discovery-opportunity-validation',
    title: 'Market Discovery & Opportunity Validation',
    focus: '市場探索、需求驗證、競品分析、商業機會評估',
    bottleneck: '市場機會仍是推測，目標使用者、替代方案、採用條件或付費角色未經核對。',
    service: '建立市場假設，規劃使用者與利害關係人探索，整理替代方案與競品脈絡，並判讀需求證據與缺口。',
    deliverables: ['市場與使用者假設清單', '競品及替代方案整理', '需求證據、風險與下一步建議'],
    steps: ['定義目標市場與需要驗證的假設', '蒐集使用者、競品與替代方案證據', '整理機會、限制與待補資料'],
  },
  {
    number: '06',
    slug: 'business-model-go-to-market',
    title: 'Business Model & Go-to-Market',
    focus: '商業模式設計、商業策略、市場進入與推廣',
    bottleneck: '價值主張、使用者與付費者、交付方式及進入市場的先後順序還不清楚。',
    service: '整理價值提供、客群、合作夥伴、收入與成本等商業模式假設，並規劃可逐步驗證的市場進入路徑。',
    deliverables: ['商業模式假設與待驗證問題', '客群、通路與合作角色草圖', '市場進入與推廣行動順序'],
    steps: ['釐清價值主張、客群與付費角色', '整理交付、通路、合作及資源假設', '規劃市場進入測試與檢核方式'],
  },
  {
    number: '07',
    slug: 'interdisciplinary-collaboration-innovation-solutions',
    title: 'Interdisciplinary Collaboration & Innovation Solutions',
    focus: '跨領域整合、專業協作、跨界創新與整合式解決方案',
    bottleneck: '議題跨越多個專業或組織，目標、分工、資訊接口與決策方式尚未對齊。',
    service: '協助界定共同問題與合作目標，整理參與角色、專業接口、協作方式及整合式方案的探索方向。',
    deliverables: ['合作角色與專業能力地圖', '共同目標、分工與待協調事項', '整合式解決方案概念與後續探索步驟'],
    steps: ['對齊共同議題、目標與使用情境', '盤點參與角色、能力與依賴條件', '形成協作架構及可共同驗證的方案方向'],
  },
];

export const serviceFlow = [
  'research-design-development',
  'research-translation-commercialization',
  'intellectual-property-technology-transfer',
  'product-innovation-development',
  'market-discovery-opportunity-validation',
  'business-model-go-to-market',
  'interdisciplinary-collaboration-innovation-solutions',
];
