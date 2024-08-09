(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_357a28._.js", {

"[project]/src/components/ProjectBoxes.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// src/components/ProjectBoxes.js
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "getStaticProps": ()=>getStaticProps
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$path$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/path/path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/gray-matter/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
async function getStaticProps() {
    const projectsDirectory = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$path$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd(), 'src/content/projects');
    const filenames = fs.readdirSync(projectsDirectory);
    const projects = filenames.map((filename)=>{
        const filePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$path$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fileContents);
        return {
            ...data,
            slug: filename.replace('.md', '')
        };
    });
    return {
        props: {
            projects
        }
    };
}
const ProjectBox = ({ icon, title, description, link })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start group transition-transform duration-300 transform hover:-translate-y-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: link,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex bg-gray-800 group-hover:bg-secondary items-center justify-center h-6 w-6 p-0.5 md:h-8 md:w-8 rounded-md mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "32px",
                        viewBox: "0 -960 960 960",
                        width: "32px",
                        fill: "#FFFFFF",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectBoxes.js",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectBoxes.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectBoxes.js",
                    lineNumber: 33,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base md:text-lg font-medium mb-1",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectBoxes.js",
                    lineNumber: 38,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-xs md:text-sm",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectBoxes.js",
                    lineNumber: 39,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectBoxes.js",
            lineNumber: 32,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectBoxes.js",
        lineNumber: 31,
        columnNumber: 3
    }, this);
_c = ProjectBox;
const ProjectBoxes = ({ featuredOnly })=>{
    _s();
    const [projectsData, setProjectsData] = useState([]);
    useEffect(()=>{
        fetch("src/content/projects.json").then((response)=>response.json()).then((data)=>setProjectsData(data)).catch((error)=>console.error('Error fetching education data:', error));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: projectsData.map((project)=>project.feature || !featuredOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectBox, {
                    icon: project.icon,
                    title: project.title,
                    description: project.description,
                    link: project.link
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectBoxes.js",
                    lineNumber: 59,
                    columnNumber: 11
                }, this) : null)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectBoxes.js",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectBoxes.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
_s(ProjectBoxes, "O5ySXtvnXdnOu2grh2gvtOyP+SQ=");
_c1 = ProjectBoxes;
const __TURBOPACK__default__export__ = ProjectBoxes;
var _c, _c1;
__turbopack_refresh__.register(_c, "ProjectBox");
__turbopack_refresh__.register(_c1, "ProjectBoxes");

})()),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_357a28._.js.map