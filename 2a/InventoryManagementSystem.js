var input = [
    'wkzhyfdpluzeqvajtbbosngkxc', 'wrzhyfdplumeqvajtbioskfksc', 'wrzhyfdolumyqvajtbiosngkxs',
    'urzhyfdplbmeqvrjtbiosngkxc', 'wrzhyfrulumeqvajtbiosngkxf', 'wrzhnfdprumvqvajtbiosngkxc',
    'wrzhyfpplumeivajtbiosrgkxc', 'wrzhybdplumeqvaftbiosxgkxc', 'wrzgyfdplumeqvaltbiosngcxc',
    'wrzhbfdzlumeqvajtbipsngkxc', 'wrzhyfdplumwqeajtbiosngxxc', 'wrzhyddplumeqvajtbimsngkxo',
    'wrzhyfdplumsqdajtfiosngkxc', 'wrzvyfdplumeqjajtbkosngkxc', 'wrzhyfddlumeqvujtbiosngxxc',
    'nrzhywdplumeqvajtbtosngkxc', 'wzzhyfdplomeqvdjtbiosngkxc', 'urzhyfdplumeqvaatbiosngkxb',
    'wtzyyfdplumeqvajtbiosngkxl', 'wrzhyfdhlumnqvajebiosngkxc', 'wrzhyfdplumpqvajtbiosnyjxc',
    'wrzdyfdplumeqvajtviospgkxc', 'wrzhyfdplzmeqvajtbiosegfxc', 'wrzhyfdglumkqvajtwiosngkxc',
    'wrzhtfdplgmeqvaqtbiosngkxc', 'wrzhyfdplumeqvajxpiosngexc', 'frzhyfdplvmeqvajtbiosngkxp',
    'wrzhyfkplumeqvajtbfosngkpc', 'irzhyfqplumeqvajtbiosngktc', 'wrzhyfdpluvoqvajtbioingkxc',
    'wrzhyfdplumemvautbuosngkxc', 'wfzhyflplumeqvijtbiosngkxc', 'wrzhyfdglumeqvzjkbiosngkxc',
    'wrzcyfdplaneqvajtbiosngkxc', 'wrzhbfdplumeqwajtbiosngpxc', 'szdhyfdplumeqvajtbiosngkxc',
    'krzhyfdplumeqvajtxilsngkxc', 'brzhyfmplumexvajtbiosngkxc', 'wrzhyvdplumeqvajtbiosiglxc',
    'orzhyfdplumeqvaotbcosngkxc', 'hrzhyfdplumeqvaptbiocngkxc', 'wwzhyfdklummqvajtbiosngkxc',
    'wrzhyfdppymeqvvjtbiosngkxc', 'wsehyudplumeqvajtbiosngkxc', 'wrzhyzpplumeqvajtbioscgkxc',
    'wrzhyfqpyumeqvajtbiusngkxc', 'urzhyfdpdumeqmajtbiosngkxc', 'wrzhyfdrlumxqvajtbiosnakxc',
    'wrthyfdplumeskajtbiosngkxc', 'wrzhyfdplymeqvajtbiesbgkxc', 'wrzhyfdqlumeqyajtciosngkxc',
    'trzhsfdplumeqyajtbiosngkxc', 'wpzhyfdplimeqvajtbiosngfxc', 'wrzhhfdplrmeqvajtbiosngkxx',
    'wrzhycdpgumeqvajtbioslgkxc', 'wrzhyfdelumeqvajgtiosngkxc', 'wrzhyfdplutebvajtbiosygkxc',
    'wrzhyfdplukeqvajtbiorngkec', 'erzhyfdilumeqvajwbiosngkxc', 'wrzhyfdplumnivxjtbiosngkxc',
    'wrzhyfdplumebvajtoiovngkxc', 'wrzhyfdplumeqvajtbtosnwkxe', 'wrzhyfxplumevvajtciosngkxc',
    'wbzhyfdxlumeqvajtriosngkxc', 'wrzyyfdplumeqvajmbiosngkxb', 'wfthyfdplumeqvajtbiosngkdc',
    'wrzhuedplumeqvajtbgosngkxc', 'wrzhifdplumeqvajtsrosngkxc', 'wrzhyfdplumqqvajtaiosngkac',
    'krzhyfvvlumeqvajtbiosngkxc', 'wrzhyfdplzmeqqajtbiosngkvc', 'wrzhyfqplumeqvajtbiosngdxy',
    'wrzhyfdpluieqvajtbiosngjjc', 'wrzhyfdvlumeqrajdbiosngkxc', 'wrzhcfdpxumeqvajtbiotngkxc',
    'wrzhyfdprumeqvaitbiosngexc', 'wrzhygdplumeqvpjtbiasngkxc', 'wrzhyndplumeqvajtpiosngkoc',
    'wrzhyfdplumedvajtriowngkxc', 'wezjyndplumeqvajtbiosngkxc', 'wrmhyfdplumewiajtbiosngkxc',
    'wrztyfdplumeqnajtbiobngkxc', 'wrzhyfdpyumeqvajjbijsngkxc', 'wrfhyfdplumeqkajtbiosnqkxc',
    'wrzhyfdpllmezvartbiosngkxc', 'wszhyfdplumeqeajtbiqsngkxc', 'wrzhyfdplumeqwajtbnosnikxc',
    'wrzvyfqulumeqvajtbiosngkxc', 'drzhyfdplureqvajtbiqsngkxc', 'wrzhyfdplumeqjamtbigsngkxc',
    'wrzhyfdplumeqvajbbiosngzrc', 'grzhyfdpuumeqvajtbicsngkxc', 'wrrhyfdplumeqvajtgiosnggxc',
    'wrzhyfkplumvqvajtbiosnhkxc', 'wrzhyfdplumeqvajtbicspgkxa', 'wrzhyfdplumeqvajtiiosnggoc',
    'wfzhyfdplumyqvaytbiosngkxc', 'wrzhyfdpcumeqvajtbibsnfkxc', 'wrzhyfdplumeqvajtbigsnzkmc',
    'wrzhyfdplcmeqvqjtriosngkxc', 'wrzhypdplwmeqvajtbiosnvkxc', 'wrziyfdmlumeqvaatbiosngkxc',
    'wkzhyfdplsmeqvajobiosngkxc', 'wrzhyfdplumeqvkjvliosngkxc', 'wzzbyfdplumeqvajtbiolngkxc',
    'wrzhyfdplvweqvajtbipsngkxc', 'wrzhyvdplumeqvujtbiosnfkxc', 'wrbhyfdplumedvajtbiosnhkxc',
    'wrzhofdplumeqvajtbiosnskxy', 'wrzhyfdplumeqvaetbiohwgkxc', 'wezhyfoplumeqvajtbiosngmxc',
    'wrzhykdblumeqvajtbiosngkjc', 'wrzhyddplwmeqvajtbioungkxc', 'wrzhyldplumqqvajpbiosngkxc',
    'wrzhyfdtlumeqvajtbiusngkcc', 'wrzhyfdilumeqvajtbiosdgkxk', 'wrvhywdplumeqvajtbiosngoxc',
    'wrzhyfdpyumeqvajtkiomngkxc', 'wrzhyfdpbummqvajtbiosngcxc', 'wrzhyfdpljmeqvajlbiosngjxc',
    'wrzhyfdpmuieqdajtbiosngkxc', 'wrzgrfdplumeqvaktbiosngkxc', 'wrzhgrdpluueqvajtbiosngkxc',
    'wazhyfdplhmeqvaqtbiosngkxc', 'wruhyfdplumeqvujtliosngkxc', 'wrzvyfdslumeqvajtbiwsngkxc',
    'wrzhyfdplumeivactbiosqgkxc', 'wrzpyfdpbumeqvajtbioszgkxc', 'bgzhyfdplumeyvajtbiosngkxc',
    'wrzhyfkplumeqvajtbiotngkxh', 'wrdhyfhplumexvajtbiosngkxc', 'brzhyfdpgumeqvgjtbiosngkxc',
    'arzhqfdpeumeqvajtbiosngkxc', 'wrzhyftplumeqvajfbiosnykxc', 'wrzhyfdpcumeqvartbtosngkxc',
    'wrzhvfzplumdqvajtbiosngkxc', 'wrzhyfdjlumeqvaetbiosjgkxc', 'wrbhyfdplumeqvajjjiosngkxc',
    'wrxhyfdplumeqvajtbiyskgkxc', 'wpzhyydplumeqvajtbiosqgkxc', 'wrzhyfdplumzqvajtbzoongkxc',
    'crzhyfdplnmeqvajtbjosngkxc', 'wrzhyfdpluveusajtbiosngkxc', 'wrzhypdpluyecvajtbiosngkxc',
    'wrnhyfdplumeqvajtbioengoxc', 'wrzhypdplumefvajybiosngkxc', 'wrzhyfdplumeqvattviosngkdc',
    'wrzhyfdplqmeqbajtbiostgkxc', 'wrghyfdpluveqvajtbiosngkxn', 'wryhyfdplumeqvajrbiopngkxc',
    'wrzhyqdplumeqvajtbiwsngkxt', 'wrmoyfdpluheqvajtbiosngkxc', 'wrghyfdnlumeqvyjtbiosngkxc',
    'wrzpyfdplumevvaatbiosngkxc', 'wrzhyfdplumhqvajtbiodngxxc', 'wrzhyfdplumeqcajtbioyjgkxc',
    'wrzhyfdplumeqvajabirsngkgc', 'wrzhtfnplukeqvajtbiosngkxc', 'wqzhyfdplumeqvajtbiopegkxc',
    'lrzhzfdplumeqdajtbiosngkxc', 'wrzzyfdplumeqvajnkiosngkxc', 'wrzhyfdflmmeqvajmbiosngkxc',
    'wrzoyfdplumeqvjjtpiosngkxc', 'wrzhyfdpmpmeqvajhbiosngkxc', 'krvhyfdplumeqvajtbiossgkxc',
    'wrzhyfdplumeqvaetviosnmkxc', 'wrzhyfzclumeqvajtbiosngwxc', 'wrzhyfdpvumeqvajtbiosngkcv',
    'wrzhyfdpoumeqvajtbiozngoxc', 'wrzhyfwglumeqvajtbxosngkxc', 'wrshyfdplumeqiajtbiosngklc',
    'wrzhyfdptdmeqvajtziosngkxc', 'wrwhyfdplumeqqajtbiosngkxj', 'wrzlyfypldmeqvajtbiosngkxc',
    'wrzhyfdplumeqvajtbirknikxc', 'wrzhyhdplumeqvajtbmosnbkxc', 'wyzhyfiplumeqvwjtbiosngkxc',
    'wrzgyfsplumeqvajtziosngkxc', 'wrzhrfdllumepvajtbiosngkxc', 'wrzayfdplumeqvajtbiosqgktc',
    'whzhyfdplemnqvajtbiosngkxc', 'wazhyfdplumeqvaptbioongkxc', 'wrzhyfdpluueqvajtbiosnglvc',
    'wrzhyfdplumjqvajmbionngkxc', 'wrzhofdplvmeqvajtbiosnqkxc', 'wrzhfidpluzeqvajtbiosngkxc',
    'wrzhlfdpcumeqvaatbiosngkxc', 'wrzhyfdplumewvajtbiosigkoc', 'wrzjyfdplwmeqvajtbiodngkxc',
    'wrzhyfdplumeqnsjtniosngkxc', 'wrzxyfdplxmeqvajtbiosngkdc', 'wrzhyfdplumpqvartbuosngkxc',
    'orzhyfdplumeqzsjtbiosngkxc', 'wrzhyfdplumebvawtbiosngkxt', 'wrztyfdulumeqvajtbiosngkxy',
    'wrzhytdplumeqvajtbznsngkxc', 'wrzhvfdplumeqvajtbinsngkxu', 'wezmyfdplumeqvajhbiosngkxc',
    'wrzhhftplumeqvajtaiosngkxc', 'wrzhyfgplumeqvajtbioskgjxc', 'ujuhyfdplumeqvajtbiosngkxc',
    'wryhymdplumeqvaftbiosngkxc', 'wrzhygdplumeqvajibiosfgkxc', 'frzhyfdppumeqvavtbiosngkxc',
    'wruhyfdylumeqvajzbiosngkxc', 'wrzhzfdplumeqvajtbwosygkxc', 'wrzhyfdplumeqvaeteiojngkxc',
    'wrhhyfdplumeqvajtiiopngkxc', 'irzhyfdplumeqvajtbiosngryc', 'wrvhycdpzumeqvajtbiosngkxc',
    'wrzhyfdplumyqwajtboosngkxc', 'wrzthfdplumeqvajtbioengkxc', 'mrzhyfdalumeqvajtbiosngcxc',
    'wrzhyfdflumpqvajtbiosngkmc', 'wrzhyfxplumeqvajtbiosnvkxo', 'wrzhyfdglumeqvajtbiosnfkxu',
    'wrzhyfdnrumeqpajtbiosngkxc', 'wrzhlipplumeqvajtbiosngkxc', 'wrzhkfdplumemvajtbiohngkxc',
    'wrziyfdmlumeqvaatbiosngkoc', 'wrzhyfdplwceqvajtbiosngzxc', 'wrzhyfdplumpqvactbiosngixc',
    'wdzhyfdhdumeqvajtbiosngkxc', 'wnzhyfdplumeqvajtbbosngrxc', 'wrzhyfdblumeqvajtbiosngvxw',
    'wyzhyfxpkumeqvajtbiosngkxc', 'wrzhywdplumjqvajgbiosngkxc', 'wrzhyfdpxumhqvajtbiokngkxc',
    'wrzhxfpplumeqvajtbiosngkxk', 'mrzhyfdplumeqkajubiosngkxc', 'drzhyfdplumeqvajtbioingnxc',
    'wrekyfdplumeqvajtbidsngkxc', 'wrzhyfdplumeanyjtbiosngkxc', 'wrzhyddpluzeqvajtbiosngtxc',
    'wrzfyfdplumeqvaqtbiosngkxr', 'wrghywdpluneqvajtbiosngkxc', 'wrzhyfdplueeqvaptbioyngkxc',
    'wrzhyqdpllmeqvajtbiosngdxc', 'whzhyfdxlumeqvajtbiosngksc', 'wrzjyfdplumeqvuitbiosngkxc',
    'brzhyfdplumeqhajtbiolngkxc', 'wrzhyfqclureqvajtbiosngkxc', 'wwzhpfdplureqvajtbiosngkxc',
    'wrzhyfdplumeqvavebijsngkxc', 'wrzhyfdpuumeqvajtsiosnkkxc', 'wrxhyfuplumeqvajtbiosngpxc',
    'wrzhyfdplumeqvujlbiospgkxc', 'wrzvyfdplumeqvajtbiwsngpxc', 'wrzhyndplumeqvajtbiwsnekxc',
    'wrzhkfdpoumeqvautbiosngkxc'
];

var InventoryManagementSystem = (function() {

    var doubles = 0,
        triples = 0;

    return {
        go: function(input) {
            for (let id of input) {
                
                let letters = {};

                for (let c of id) {
                    if (!letters[c]) {
                        letters[c] = 1;
                    } else {
                        letters[c] += 1;
                    }
                }

                let hasDouble = false,
                    hasTriple = false;

                for (let l in letters) {
                    if (letters[l] == 2) {
                        hasDouble = true;
                    } else if (letters[l] == 3) {
                        hasTriple = true;
                    }
                }
                doubles += +hasDouble;
                triples += +hasTriple;

                console.log(doubles);
                console.log(triples);
            }
            document.getElementById('result').innerHTML += doubles * triples;            
        }
    }

})();

InventoryManagementSystem.go(input);