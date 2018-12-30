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

    function differsByOne(a, b) {
        let difference = 0;
        for (let i=0, len=a.length; i<len; i++) {
            if (a[i] != b[i]) {
                difference++;
            }
        }
        return difference === 1;
    }

    function getCommonSubstring(a, b) {
        let substring = '';
        for (let i=0, len=a.length; i<len; i++) {
            if (a[i] == b[i]) {
                substring += a[i];
            }
        }
        return substring;
    }

    return {
        go: function(input) {

            for (let i=0, len=input.length; i<len; i++) {

                for (let j=0; j<len; j++) {
                
                    if (i != j && differsByOne(input[i], input[j])) {
                        console.log(input[i]);
                        console.log(input[j]);

                        document.getElementById('result').innerHTML += getCommonSubstring(input[i], input[j]);
                        return;
                    }
                    
                }

                
            }
            //document.getElementById('result').innerHTML += doubles * triples;
        }
    }

})();

InventoryManagementSystem.go(input);