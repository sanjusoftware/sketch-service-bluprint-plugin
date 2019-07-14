import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  addSbpSymbolsLibrary();
  printSbpSymbols();
  
}


function printSbpSymbols() {
  var sbp_library = getSbpLibrary();

  // https://developer.sketch.com/reference/api/#get-the-symbols-that-can-be-imported
  var document = sketch.getSelectedDocument();
  var page = document.selectedPage;
  var SymbolInstance = sketch.SymbolInstance

  var symbolReferences = sbp_library.getImportableSymbolReferencesForDocument(document);
  symbolReferences.forEach(symRef => {
    console.log(symRef);

    var symbolMaster = symRef.import()
    var instance = symbolMaster.createNewInstance()
    instance.parent = page;

  });
}

function getSbpLibrary() {
  var libraries = sketch.getLibraries();
  var sbp_library = libraries.find(lib => {
    return lib.name == 'sbp_symbols';
  });
  return sbp_library;
}

function addSbpSymbolsLibrary() {
  console.log('Adding SBP symbolssss')
  var libPath = '/Users/sanjeev_mishra/projects/sketch-service-bluprint-plugin/assets/sbp_symbols.sketch'
  var Library = sketch.Library
  var library = Library.getLibraryForDocumentAtPath(libPath)
  console.log('Done Adding SBP symbols to documentssss')
}