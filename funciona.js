var app = angular.module('grafico', ['nvd3', 'ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'templates/home.htm',
        controller: 'MainCtrl'
    });
    $routeProvider.when('/sankey', {
        templateUrl: 'templates/sankey.htm',
        controller: 'sankeyController'
    });
    $routeProvider.when('/super', {
        templateUrl: 'templates/superposition.htm',
        controller: 'superController'
    });
    $routeProvider.when('/cross', {
        templateUrl: 'templates/cross.htm',
        controller: 'crossController'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
})


app.controller('superController', function($scope) {
 $scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d[0]; },
                y: function(d){ return d[1]; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Años',
                    tickFormat: function(d) {
                        return d3.time.format('%y')(new Date(d));
                    },
                    showMaxMin: false,
                    staggerLabels: true
                },
                yAxis: {
                    axisLabel: 'Cantidad de Usuarios',
                    tickFormat: function(d){
                        return d3.format('.0f')(d);
                    },
                    axisLabelDistance: -10
                },
                 forceY: [0,0,110]
            },
            title: {
                enable: true,
                text: 'Nuevos clientes por compañía'
            },
            subtitle: {
                enable: true,
                text: 'Se muestran cuantos clientes se han portado a una determinada compañía',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };

        $scope.data=[
            {
                values:[[1325386800000 , 10938],[1328065200000 , 28087],[1330570800000 , 32770],[1333249200000 , 25949],[1335841200000 , 24066],[1338523200000 , 21564],[1341115200000 , 26167],[1343793600000 , 25086],[1346468400000 , 20357],[1349060400000 , 24880],[1351738800000 , 24692],[1354330800000 , 23145],[1357009200000 , 22724],[1359687600000 , 22495],[1362106800000 , 21784],[1364785200000 , 19645],[1367377200000 , 17914],[1370059200000 , 17886],[1372651200000 , 23850],[1375329600000 , 23570],[1378004400000 , 18033],[1380596400000 , 23501],[1383274800000 , 22301],[1385866800000 , 29426],[1388545200000 , 26136],[1391223600000 , 24451],[1393642800000 , 32462],[1396321200000 , 33120],[1398913200000 , 26909],[1401595200000 , 27863],[1404187200000 , 33507],[1406865600000 , 33979],[1409540400000 , 33039],[1412132400000 , 40900],[1414810800000 , 41979],[1417402800000 , 47389],[1420081200000 , 45508],[1422759600000 , 43546],[1425178800000 , 50910],[1427857200000 , 50677],[1430449200000 , 49950],[1433131200000 , 52558],[1435723200000 , 51151],[1438401600000 , 56837],[1441076400000 , 47288],[1443668400000 , 55013],[1446346800000 , 62547],[1448938800000 , 62716],[1451617200000 , 61627],[1454295600000 , 58826],[1456801200000 , 64540],[1459479600000 , 73185],[1462071600000 , 63139],[1464753600000 , 68138],[1467345600000 , 79355],[1470024000000 , 80515],[1472698800000 , 86332]]
                ,key:"Claro"
            },{
                values:[[1325386800000 , 12749],[1328065200000 , 21354],[1330570800000 , 22178],[1333249200000 , 17407],[1335841200000 , 18871],[1338523200000 , 20092],[1341115200000 , 18007],[1343793600000 , 21907],[1346468400000 , 17340],[1349060400000 , 19223],[1351738800000 , 16840],[1354330800000 , 16906],[1357009200000 , 19475],[1359687600000 , 17122],[1362106800000 , 18715],[1364785200000 , 19891],[1367377200000 , 20478],[1370059200000 , 20807],[1372651200000 , 27100],[1375329600000 , 26072],[1378004400000 , 14220],[1380596400000 , 20320],[1383274800000 , 16252],[1385866800000 , 16049],[1388545200000 , 16816],[1391223600000 , 16012],[1393642800000 , 17509],[1396321200000 , 17302],[1398913200000 , 16881],[1401595200000 , 25981],[1404187200000 , 39550],[1406865600000 , 34211],[1409540400000 , 31976],[1412132400000 , 36273],[1414810800000 , 33771],[1417402800000 , 33613],[1420081200000 , 25385],[1422759600000 , 22782],[1425178800000 , 22972],[1427857200000 , 23350],[1430449200000 , 21761],[1433131200000 , 21549],[1435723200000 , 30209],[1438401600000 , 34912],[1441076400000 , 31848],[1443668400000 , 31339],[1446346800000 , 31396],[1448938800000 , 30643],[1451617200000 , 26851],[1454295600000 , 28143],[1456801200000 , 31641],[1459479600000 , 30597],[1462071600000 , 30184],[1464753600000 , 34582],[1467345600000 , 36520],[1470024000000 , 40038],[1472698800000 , 30484]],    
                key:"Entel"
            },{
                values:[[1325386800000 , 0] , [1328065200000 , 0] , [1330570800000 , 0] , [1333249200000 , 0] , [1335841200000 , 0] , [1338523200000 , 0] , [1341115200000 , 0] , [1343793600000 , 0] , [1346468400000 , 0] , [1349060400000 , 0] , [1351738800000 , 0] , [1354330800000 , 0] , [1357009200000 , 0] , [1359687600000 , 0] , [1362106800000 , 0] , [1364785200000 , 0] , [1367377200000 , 0] , [1370059200000 , 0] , [1372651200000 , 0] , [1375329600000 , 76] , [1378004400000 , 101] , [1380596400000 , 186] , [1383274800000 , 360] , [1385866800000 , 235] , [1388545200000 , 315] , [1391223600000 , 223] , [1393642800000 , 257] , [1396321200000 , 302] , [1398913200000 , 275] , [1401595200000 , 294] , [1404187200000 , 250] , [1406865600000 , 211] , [1409540400000 , 238] , [1412132400000 , 235] , [1414810800000 , 300] , [1417402800000 , 442] , [1420081200000 , 458] , [1422759600000 , 511] , [1425178800000 , 672] , [1427857200000 , 664] , [1430449200000 , 669] , [1433131200000 , 847] , [1435723200000 , 976] , [1438401600000 , 935] , [1441076400000 , 961] , [1443668400000 , 1219] , [1446346800000 , 1385] , [1448938800000 , 2157] , [1451617200000 , 1883] , [1454295600000 , 2520] , [1456801200000 , 2996] , [1459479600000 , 3247] , [1462071600000 , 3601] , [1464753600000 , 3941] , [1467345600000 , 4081] , [1470024000000 , 4301] , [1472698800000 , 3631] ],    
                key:"Falabella"
            },{
                values:[[1325386800000 , 0] , [1328065200000 , 0] , [1330570800000 , 0] , [1333249200000 , 0] , [1335841200000 , 0] , [1338523200000 , 0] , [1341115200000 , 0] , [1343793600000 , 0] , [1346468400000 , 0] , [1349060400000 , 0] , [1351738800000 , 0] , [1354330800000 , 0] , [1357009200000 , 16] , [1359687600000 , 20] , [1362106800000 , 0] , [1364785200000 , 0] , [1367377200000 , 0] , [1370059200000 , 0] , [1372651200000 , 0] , [1375329600000 , 0] , [1378004400000 , 0] , [1380596400000 , 29] , [1383274800000 , 26] , [1385866800000 , 24] , [1388545200000 , 0] , [1391223600000 , 0] , [1393642800000 , 15] , [1396321200000 , 0] , [1398913200000 , 0] , [1401595200000 , 0] , [1404187200000 , 0] , [1406865600000 , 0] , [1409540400000 , 0] , [1412132400000 , 0] , [1414810800000 , 0] , [1417402800000 , 0] , [1420081200000 , 0] , [1422759600000 , 0] , [1425178800000 , 0] , [1427857200000 , 0] , [1430449200000 , 0] , [1433131200000 , 0] , [1435723200000 , 0] , [1438401600000 , 0] , [1441076400000 , 0] , [1443668400000 , 0] , [1446346800000 , 0] , [1448938800000 , 0] , [1451617200000 , 0] , [1454295600000 , 0] , [1456801200000 , 0] , [1459479600000 , 0] , [1462071600000 , 0] , [1464753600000 , 0] , [1467345600000 , 0] , [1470024000000 , 0] , [1472698800000 , 0] ],
                key: "Mobilink"
            },{
                values:[[1325386800000 , 5442] , [1328065200000 , 14572] , [1330570800000 , 19713] , [1333249200000 , 16868] , [1335841200000 , 16958] , [1338523200000 , 21072] , [1341115200000 , 18132] , [1343793600000 , 18516] , [1346468400000 , 15349] , [1349060400000 , 18883] , [1351738800000 , 17652] , [1354330800000 , 15105] , [1357009200000 , 15877] , [1359687600000 , 11708] , [1362106800000 , 12497] , [1364785200000 , 14952] , [1367377200000 , 13943] , [1370059200000 , 12082] , [1372651200000 , 16228] , [1375329600000 , 19289] , [1378004400000 , 18203] , [1380596400000 , 26631] , [1383274800000 , 25500] , [1385866800000 , 21362] , [1388545200000 , 21252] , [1391223600000 , 21483] , [1393642800000 , 24264] , [1396321200000 , 27062] , [1398913200000 , 26595] , [1401595200000 , 28985] , [1404187200000 , 37842] , [1406865600000 , 38834] , [1409540400000 , 30708] , [1412132400000 , 37782] , [1414810800000 , 36497] , [1417402800000 , 34796] , [1420081200000 , 33015] , [1422759600000 , 30732] , [1425178800000 , 34465] , [1427857200000 , 34159] , [1430449200000 , 34577] , [1433131200000 , 37511] , [1435723200000 , 37503] , [1438401600000 , 37341] , [1441076400000 , 48495] , [1443668400000 , 55259] , [1446346800000 , 49095] , [1448938800000 , 46350] , [1451617200000 , 41725] , [1454295600000 , 40868] , [1456801200000 , 58474] , [1459479600000 , 69864] , [1462071600000 , 76332] , [1464753600000 , 75658] , [1467345600000 , 82848] , [1470024000000 , 76592] , [1472698800000 , 74973] ],
                key:"Movistar"     
            },{
                values:[[1325386800000 , 0] , [1328065200000 , 0] , [1330570800000 , 0] , [1333249200000 , 0] , [1335841200000 , 0] , [1338523200000 , 1] , [1341115200000 , 6] , [1343793600000 , 6] , [1346468400000 , 5] , [1349060400000 , 19] , [1351738800000 , 7] , [1354330800000 , 18] , [1357009200000 , 63] , [1359687600000 , 78] , [1362106800000 , 31] , [1364785200000 , 29] , [1367377200000 , 41] , [1370059200000 , 158] , [1372651200000 , 96] , [1375329600000 , 33] , [1378004400000 , 94] , [1380596400000 , 70] , [1383274800000 , 80] , [1385866800000 , 30] , [1388545200000 , 26] , [1391223600000 , 30] , [1393642800000 , 10] , [1396321200000 , 32] , [1398913200000 , 93] , [1401595200000 , 55] , [1404187200000 , 102] , [1406865600000 , 185] , [1409540400000 , 218] , [1412132400000 , 246] , [1414810800000 , 143] , [1417402800000 , 97] , [1420081200000 , 115] , [1422759600000 , 63] , [1425178800000 , 76] , [1427857200000 , 108] , [1430449200000 , 87] , [1433131200000 , 86] , [1435723200000 , 19] , [1438401600000 , 6] , [1441076400000 , 4] , [1443668400000 , 10] , [1446346800000 , 1] , [1448938800000 , 5] , [1451617200000 , 3] , [1454295600000 , 1] , [1456801200000 , 9] , [1459479600000 , 4] , [1462071600000 , 0] , [1464753600000 , 0] , [1467345600000 , 18] , [1470024000000 , 6] , [1472698800000 , 10] ],
                key:"Netline"
            },{
               values:[[1325386800000 , 0] , [1328065200000 , 0] , [1330570800000 , 0] , [1333249200000 , 0] , [1335841200000 , 0] , [1338523200000 , 0] , [1341115200000 , 0] , [1343793600000 , 0] , [1346468400000 , 0] , [1349060400000 , 0] , [1351738800000 , 0] , [1354330800000 , 0] , [1357009200000 , 0] , [1359687600000 , 0] , [1362106800000 , 0] , [1364785200000 , 0] , [1367377200000 , 0] , [1370059200000 , 0] , [1372651200000 , 0] , [1375329600000 , 0] , [1378004400000 , 0] , [1380596400000 , 0] , [1383274800000 , 0] , [1385866800000 , 0] , [1388545200000 , 0] , [1391223600000 , 0] , [1393642800000 , 0] , [1396321200000 , 0] , [1398913200000 , 0] , [1401595200000 , 0] , [1404187200000 , 0] , [1406865600000 , 0] , [1409540400000 , 0] , [1412132400000 , 0] , [1414810800000 , 0] , [1417402800000 , 0] , [1420081200000 , 0] , [1422759600000 , 0] , [1425178800000 , 0] , [1427857200000 , 0] , [1430449200000 , 0] , [1433131200000 , 0] , [1435723200000 , 0] , [1438401600000 , 0] , [1441076400000 , 0] , [1443668400000 , 0] , [1446346800000 , 197] , [1448938800000 , 108] , [1451617200000 , 497] , [1454295600000 , 364] , [1456801200000 , 279] , [1459479600000 , 0] , [1462071600000 , 12] , [1464753600000 , 103] , [1467345600000 , 0] , [1470024000000 , 281] , [1472698800000 , 403] ],
               key:"OPS"     
            },{
                values:[[1325386800000 , 0] , [1328065200000 , 0] , [1330570800000 , 0] , [1333249200000 , 0] , [1335841200000 , 0] , [1338523200000 , 0] , [1341115200000 , 0] , [1343793600000 , 0] , [1346468400000 , 0] , [1349060400000 , 0] , [1351738800000 , 0] , [1354330800000 , 0] , [1357009200000 , 0] , [1359687600000 , 0] , [1362106800000 , 0] , [1364785200000 , 0] , [1367377200000 , 0] , [1370059200000 , 0] , [1372651200000 , 0] , [1375329600000 , 0] , [1378004400000 , 0] , [1380596400000 , 0] , [1383274800000 , 0] , [1385866800000 , 0] , [1388545200000 , 0] , [1391223600000 , 0] , [1393642800000 , 0] , [1396321200000 , 0] , [1398913200000 , 0] , [1401595200000 , 0] , [1404187200000 , 0] , [1406865600000 , 0] , [1409540400000 , 0] , [1412132400000 , 0] , [1414810800000 , 0] , [1417402800000 , 0] , [1420081200000 , 0] , [1422759600000 , 6] , [1425178800000 , 55] , [1427857200000 , 266] , [1430449200000 , 315] , [1433131200000 , 594] , [1435723200000 , 1141] , [1438401600000 , 816] , [1441076400000 , 753] , [1443668400000 , 653] , [1446346800000 , 529] , [1448938800000 , 568] , [1451617200000 , 551] , [1454295600000 , 512] , [1456801200000 , 1006] , [1459479600000 , 584] , [1462071600000 , 908] , [1464753600000 , 566] , [1467345600000 , 389] , [1470024000000 , 369] , [1472698800000 , 259] ],
                key:"Simple"
            },{
                values:[[1325386800000 , 0] , [1328065200000 , 0] , [1330570800000 , 0] , [1333249200000 , 0] , [1335841200000 , 0] , [1338523200000 , 0] , [1341115200000 , 0] , [1343793600000 , 0] , [1346468400000 , 0] , [1349060400000 , 0] , [1351738800000 , 0] , [1354330800000 , 0] , [1357009200000 , 0] , [1359687600000 , 0] , [1362106800000 , 0] , [1364785200000 , 0] , [1367377200000 , 0] , [1370059200000 , 0] , [1372651200000 , 0] , [1375329600000 , 0] , [1378004400000 , 0] , [1380596400000 , 0] , [1383274800000 , 0] , [1385866800000 , 396] , [1388545200000 , 219] , [1391223600000 , 115] , [1393642800000 , 533] , [1396321200000 , 805] , [1398913200000 , 546] , [1401595200000 , 83] , [1404187200000 , 725] , [1406865600000 , 863] , [1409540400000 , 786] , [1412132400000 , 429] , [1414810800000 , 201] , [1417402800000 , 405] , [1420081200000 , 123] , [1422759600000 , 134] , [1425178800000 , 22] , [1427857200000 , 26] , [1430449200000 , 6] , [1433131200000 , 3] , [1435723200000 , 3] , [1438401600000 , 2] , [1441076400000 , 3] , [1443668400000 , 3] , [1446346800000 , 5] , [1448938800000 , 0] , [1451617200000 , 0] , [1454295600000 , 0] , [1456801200000 , 0] , [1459479600000 , 0] , [1462071600000 , 0] , [1464753600000 , 0] , [1467345600000 , 0] , [1470024000000 , 0] , [1472698800000 , 49] ],
                key:"Telestar"
            },{
                values:[[1325386800000 , 26] , [1328065200000 , 24] , [1330570800000 , 47] , [1333249200000 , 30] , [1335841200000 , 244] , [1338523200000 , 76] , [1341115200000 , 57] , [1343793600000 , 92] , [1346468400000 , 144] , [1349060400000 , 80] , [1351738800000 , 60] , [1354330800000 , 60] , [1357009200000 , 70] , [1359687600000 , 47] , [1362106800000 , 45] , [1364785200000 , 81] , [1367377200000 , 77] , [1370059200000 , 68] , [1372651200000 , 114] , [1375329600000 , 105] , [1378004400000 , 92] , [1380596400000 , 230] , [1383274800000 , 198] , [1385866800000 , 272] , [1388545200000 , 214] , [1391223600000 , 69] , [1393642800000 , 114] , [1396321200000 , 88] , [1398913200000 , 115] , [1401595200000 , 157] , [1404187200000 , 138] , [1406865600000 , 215] , [1409540400000 , 173] , [1412132400000 , 200] , [1414810800000 , 163] , [1417402800000 , 147] , [1420081200000 , 203] , [1422759600000 , 154] , [1425178800000 , 188] , [1427857200000 , 156] , [1430449200000 , 122] , [1433131200000 , 238] , [1435723200000 , 340] , [1438401600000 , 186] , [1441076400000 , 306] , [1443668400000 , 95] , [1446346800000 , 86] , [1448938800000 , 112] , [1451617200000 , 142] , [1454295600000 , 75] , [1456801200000 , 95] , [1459479600000 , 155] , [1462071600000 , 100] , [1464753600000 , 81] , [1467345600000 , 169] , [1470024000000 , 210] , [1472698800000 , 170] ],
                key:"Telsur"
            },{
                values:[[1325386800000 , 0] , [1328065200000 , 0] , [1330570800000 , 17] , [1333249200000 , 974] , [1335841200000 , 1982] , [1338523200000 , 2278] , [1341115200000 , 2160] , [1343793600000 , 1845] , [1346468400000 , 1840] , [1349060400000 , 2502] , [1351738800000 , 2422] , [1354330800000 , 3429] , [1357009200000 , 2904] , [1359687600000 , 2371] , [1362106800000 , 2329] , [1364785200000 , 3343] , [1367377200000 , 4197] , [1370059200000 , 4486] , [1372651200000 , 7261] , [1375329600000 , 9673] , [1378004400000 , 8513] , [1380596400000 , 10506] , [1383274800000 , 8103] , [1385866800000 , 7879] , [1388545200000 , 6823] , [1391223600000 , 6092] , [1393642800000 , 8105] , [1396321200000 , 8332] , [1398913200000 , 9861] , [1401595200000 , 11461] , [1404187200000 , 8408] , [1406865600000 , 8659] , [1409540400000 , 9040] , [1412132400000 , 13939] , [1414810800000 , 16419] , [1417402800000 , 14680] , [1420081200000 , 12434] , [1422759600000 , 11191] , [1425178800000 , 13188] , [1427857200000 , 13413] , [1430449200000 , 13024] , [1433131200000 , 14843] , [1435723200000 , 17159] , [1438401600000 , 19356] , [1441076400000 , 15906] , [1443668400000 , 16169] , [1446346800000 , 15104] , [1448938800000 , 16262] , [1451617200000 , 19681] , [1454295600000 , 21589] , [1456801200000 , 23704] , [1459479600000 , 21669] , [1462071600000 , 23697] , [1464753600000 , 24789] , [1467345600000 , 23226] , [1470024000000 , 22338] , [1472698800000 , 18812] ],
                key:"Virgin"
            },{
                values:[[1325386800000 , 20] , [1328065200000 , 255] , [1330570800000 , 974] , [1333249200000 , 977] , [1335841200000 , 1298] , [1338523200000 , 1367] , [1341115200000 , 1263] , [1343793600000 , 1313] , [1346468400000 , 990] , [1349060400000 , 1280] , [1351738800000 , 1001] , [1354330800000 , 1074] , [1357009200000 , 1018] , [1359687600000 , 776] , [1362106800000 , 704] , [1364785200000 , 608] , [1367377200000 , 510] , [1370059200000 , 575] , [1372651200000 , 649] , [1375329600000 , 706] , [1378004400000 , 809] , [1380596400000 , 929] , [1383274800000 , 903] , [1385866800000 , 1027] , [1388545200000 , 1278] , [1391223600000 , 2295] , [1393642800000 , 3438] , [1396321200000 , 3188] , [1398913200000 , 3152] , [1401595200000 , 3300] , [1404187200000 , 3893] , [1406865600000 , 4010] , [1409540400000 , 3960] , [1412132400000 , 4587] , [1414810800000 , 5183] , [1417402800000 , 5193] , [1420081200000 , 5182] , [1422759600000 , 5055] , [1425178800000 , 6185] , [1427857200000 , 5359] , [1430449200000 , 5750] , [1433131200000 , 5381] , [1435723200000 , 6071] , [1438401600000 , 5390] , [1441076400000 , 3985] , [1443668400000 , 3767] , [1446346800000 , 3866] , [1448938800000 , 3931] , [1451617200000 , 3744] , [1454295600000 , 3629] , [1456801200000 , 5146] , [1459479600000 , 5490] , [1462071600000 , 6060] , [1464753600000 , 5899] , [1467345600000 , 7185] , [1470024000000 , 7581] , [1472698800000 , 6606] ],
                key:"VTR"
            },{
                values:[[1325386800000 , 37] , [1328065200000 , 44] , [1330570800000 , 116] , [1333249200000 , 97] , [1335841200000 , 294] , [1338523200000 , 1048] , [1341115200000 , 807] , [1343793600000 , 1210] , [1346468400000 , 891] , [1349060400000 , 1057] , [1351738800000 , 1463] , [1354330800000 , 1263] , [1357009200000 , 889] , [1359687600000 , 390] , [1362106800000 , 464] , [1364785200000 , 1168] , [1367377200000 , 1065] , [1370059200000 , 1214] , [1372651200000 , 1169] , [1375329600000 , 1994] , [1378004400000 , 1672] , [1380596400000 , 1927] , [1383274800000 , 1988] , [1385866800000 , 1577] , [1388545200000 , 1475] , [1391223600000 , 1750] , [1393642800000 , 2122] , [1396321200000 , 2655] , [1398913200000 , 2534] , [1401595200000 , 2288] , [1404187200000 , 2750] , [1406865600000 , 2475] , [1409540400000 , 2337] , [1412132400000 , 2758] , [1414810800000 , 2176] , [1417402800000 , 2612] , [1420081200000 , 2044] , [1422759600000 , 2032] , [1425178800000 , 4015] , [1427857200000 , 6830] , [1430449200000 , 7889] , [1433131200000 , 8648] , [1435723200000 , 24160] , [1438401600000 , 35192] , [1441076400000 , 37470] , [1443668400000 , 41476] , [1446346800000 , 44609] , [1448938800000 , 47566] , [1451617200000 , 38245] , [1454295600000 , 36446] , [1456801200000 , 40403] , [1459479600000 , 46393] , [1462071600000 , 48323] , [1464753600000 , 59429] , [1467345600000 , 66007] , [1470024000000 , 71207] , [1472698800000 , 57575] ],
                key:"WOM"
            }
        ];

})

app.controller('crossController', function($scope){
    function readCSV(name){
      d3.csv(name, function (data) {
      var parseDate = d3.time.format("%d/%m/%Y").parse;
      data.forEach(function(d) { 
        d.date = parseDate(d.date);
        d.in   = d.in;
        d.out  = d.out;
        d.dif = d.dif;
      });

      var differenceChart = dc.lineChart("#dc-diff-chart");
      var inChart = dc.lineChart("#dc-in-chart");
      var outChart = dc.lineChart("#dc-out-chart");

      var facts = crossfilter(data);  
      var all = facts.groupAll();

      var timeDimension = facts.dimension(function (d) {
        return d3.time.month(d.date);
      }); 

      var inValue = facts.dimension(function (d) {
        return d.in;
      });

      var outValue = facts.dimension(function (d){
        return d.out;
      })
      
      var difValue = facts.dimension(function (d){
        return d.dif;
      })

      var inGroup = timeDimension.group().reduceSum(function (d) { return d.in; });
      var outGroup = timeDimension.group().reduceSum(function (d) { return d.out; });
      var difGroup = timeDimension.group().reduceSum(function (d) { return d.dif; });



      inChart.width(900)
        .height(200)
        .margins({top: 10, right: 10, bottom: 20, left: 50})
        .dimension(timeDimension)
        .group(inGroup)
        .transitionDuration(500)
        .brushOn(false) 
        .elasticY(true)
        .x(d3.time.scale().domain([new Date(2012, 1, 1), new Date(2016, 9, 1)])) // scale and domain of the graph
        .xAxis();

        outChart.width(900)
        .height(200)
        .margins({top: 10, right: 10, bottom: 20, left: 50})
        .dimension(timeDimension)
        .group(outGroup)
        .transitionDuration(500)
        .brushOn(false) 
        .elasticY(true)
        .x(d3.time.scale().domain([new Date(2012, 1, 1), new Date(2016, 9, 1)])) // scale and domain of the graph
        .xAxis();

      differenceChart.width(900)
        .height(200)
        .margins({top: 10, right: 10, bottom: 20, left: 50})
        .dimension(timeDimension)
        .renderArea(true)
        .group(difGroup)
        .transitionDuration(500)
        .brushOn(false)
          .elasticY(true)
        .x(d3.time.scale().domain([new Date(2012, 1, 1), new Date(2016, 9, 1)])) // scale and domain of the graph
        .xAxis();

      dc.renderAll();
      
    });
    };
    document.getElementById('company').addEventListener("change", function(){
      var name = document.getElementById('company').value;
      if(name!=""){
        document.getElementById('graphs').style.display = "block";
        $("#contenedor h3").html("Entrada y salida de Clientes: "+name);
        readCSV(name+".csv")
        }
    });
})


app.controller('sankeyController', function($scope) {

    var svg, tooltip, biHiSankey, path, defs, colorScale, highlightColorScale, isTransitioning;

    var OPACITY = {
        NODE_DEFAULT: 0.9,
        NODE_FADED: 0.1,
        NODE_HIGHLIGHT: 0.8,
        LINK_DEFAULT: 0.6,
        LINK_FADED: 0.05,
        LINK_HIGHLIGHT: 0.9
      },
      TYPES = ["Telestar","Netline","WOM","Movistar","GTD Movil","Mobilink","Claro","Entel","VTR","Virgin","Falabella","Simple","OPS"],
      TYPE_COLORS = ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d"],
      TYPE_HIGHLIGHT_COLORS = ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494"],
      LINK_COLOR = "#b3b3b3",
      INFLOW_COLOR = "#2E86D1",
      OUTFLOW_COLOR = "#D63028",
      NODE_WIDTH = 36,
      COLLAPSER = {
        RADIUS: NODE_WIDTH / 2,
        SPACING: 2
      },
      OUTER_MARGIN = 10,
      MARGIN = {
        TOP: 2 * (COLLAPSER.RADIUS + OUTER_MARGIN),
        RIGHT: OUTER_MARGIN,
        BOTTOM: OUTER_MARGIN,
        LEFT: OUTER_MARGIN
      },
      TRANSITION_DURATION = 400,
      HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM,
      WIDTH = 660 - MARGIN.LEFT - MARGIN.RIGHT,
      LAYOUT_INTERATIONS = 32,
      REFRESH_INTERVAL = 7000;

    var formatNumber = function (d) {
      var numberFormat = d3.format(".0f"); // zero decimal places
      return numberFormat(d);
    },

    formatFlow = function (d) {
      var flowFormat = d3.format(".0f"); // zero decimal places with sign
      return flowFormat(d);
    },

    // Used when temporarily disabling user interractions to allow animations to complete
    disableUserInterractions = function (time) {
      isTransitioning = true;
      setTimeout(function(){
        isTransitioning = false;
      }, time);
    },

    hideTooltip = function () {
      return tooltip.transition()
        .duration(TRANSITION_DURATION)
        .style("opacity", 0);
    },

    showTooltip = function () {
      return tooltip
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + 15 + "px")
        .transition()
          .duration(TRANSITION_DURATION)
          .style("opacity", 1);
    };

    colorScale = d3.scale.ordinal().domain(TYPES).range(TYPE_COLORS),
    highlightColorScale = d3.scale.ordinal().domain(TYPES).range(TYPE_HIGHLIGHT_COLORS),

    svg = d3.select("#chart").append("svg")
            .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
          .append("g")
            .attr("transform", "translate(" + MARGIN.LEFT + "," + MARGIN.TOP + ")");

    svg.append("g").attr("id", "links");
    svg.append("g").attr("id", "nodes");
    svg.append("g").attr("id", "collapsers");

    tooltip = d3.select("#chart").append("div").attr("id", "tooltip");

    tooltip.style("opacity", 0)
        .append("p")
          .attr("class", "value");

    biHiSankey = d3.biHiSankey();

    // Set the biHiSankey diagram properties
    biHiSankey
      .nodeWidth(NODE_WIDTH)
      .nodeSpacing(10)
      .linkSpacing(4)
      .arrowheadScaleFactor(0.5) // Specifies that 0.5 of the link's stroke WIDTH should be allowed for the marker at the end of the link.
      .size([WIDTH, HEIGHT]);

    path = biHiSankey.link().curvature(0.45);

    defs = svg.append("defs");

    defs.append("marker")
      .style("fill", LINK_COLOR)
      .attr("id", "arrowHead")
      .attr("viewBox", "0 0 6 10")
      .attr("refX", "1")
      .attr("refY", "5")
      .attr("markerUnits", "strokeWidth")
      .attr("markerWidth", "1")
      .attr("markerHeight", "1")
      .attr("orient", "auto")
      .append("path")
        .attr("d", "M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z");

    defs.append("marker")
      .style("fill", OUTFLOW_COLOR)
      .attr("id", "arrowHeadInflow")
      .attr("viewBox", "0 0 6 10")
      .attr("refX", "1")
      .attr("refY", "5")
      .attr("markerUnits", "strokeWidth")
      .attr("markerWidth", "1")
      .attr("markerHeight", "1")
      .attr("orient", "auto")
      .append("path")
        .attr("d", "M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z");

    defs.append("marker")
      .style("fill", INFLOW_COLOR)
      .attr("id", "arrowHeadOutlow")
      .attr("viewBox", "0 0 6 10")
      .attr("refX", "1")
      .attr("refY", "5")
      .attr("markerUnits", "strokeWidth")
      .attr("markerWidth", "1")
      .attr("markerHeight", "1")
      .attr("orient", "auto")
      .append("path")
        .attr("d", "M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z");

    function update () {
      var link, linkEnter, node, nodeEnter, collapser, collapserEnter;

      function dragmove(node) {
        node.x = Math.max(0, Math.min(WIDTH - node.width, d3.event.x));
        node.y = Math.max(0, Math.min(HEIGHT - node.height, d3.event.y));
        d3.select(this).attr("transform", "translate(" + node.x + "," + node.y + ")");
        biHiSankey.relayout();
        svg.selectAll(".node").selectAll("rect").attr("height", function (d) { return d.height; });
        link.attr("d", path);
      }


      

      function collapse(node) {
        node.state = "collapsed";
        containChildren(node);
      }

      function restoreLinksAndNodes() {
        link
          .style("stroke", LINK_COLOR)
          .style("marker-end", function () { return 'url(#arrowHead)'; })
          .transition()
            .duration(TRANSITION_DURATION)
            .style("opacity", OPACITY.LINK_DEFAULT);

        node
          .selectAll("rect")
            .style("fill", function (d) {
              d.color = colorScale(d.type.replace(/ .*/, ""));
              return d.color;
            })
            .style("stroke", function (d) {
              return d3.rgb(colorScale(d.type.replace(/ .*/, ""))).darker(0.1);
            })
            .style("fill-opacity", OPACITY.NODE_DEFAULT);

        node.filter(function (n) { return n.state === "collapsed"; })
          .transition()
            .duration(TRANSITION_DURATION)
            .style("opacity", OPACITY.NODE_DEFAULT);
      }

      function showHideChildren(node) {
        disableUserInterractions(2 * TRANSITION_DURATION);
        hideTooltip();
        if (node.state === "collapsed") { expand(node); }
        else { collapse(node); }

        biHiSankey.relayout();
        update();
        link.attr("d", path);
        restoreLinksAndNodes();
      }

      function highlightConnected(g) {
        link.filter(function (d) { return d.source === g; })
          .style("marker-end", function () { return 'url(#arrowHeadInflow)'; })
          .style("stroke", OUTFLOW_COLOR)
          .style("opacity", OPACITY.LINK_DEFAULT);

        link.filter(function (d) { return d.target === g; })
          .style("marker-end", function () { return 'url(#arrowHeadOutlow)'; })
          .style("stroke", INFLOW_COLOR)
          .style("opacity", OPACITY.LINK_DEFAULT);
      }

      function fadeUnconnected(g) {
        link.filter(function (d) { return d.source !== g && d.target !== g; })
          .style("marker-end", function () { return 'url(#arrowHead)'; })
          .transition()
            .duration(TRANSITION_DURATION)
            .style("opacity", OPACITY.LINK_FADED);

        node.filter(function (d) {
          return (d.name === g.name) ? false : !biHiSankey.connected(d, g);
        }).transition()
          .duration(TRANSITION_DURATION)
          .style("opacity", OPACITY.NODE_FADED);
      }

      link = svg.select("#links").selectAll("path.link")
        .data(biHiSankey.visibleLinks(), function (d) { return d.id; });

      link.transition()
        .duration(TRANSITION_DURATION)
        .style("stroke-WIDTH", function (d) { return Math.max(1, d.thickness); })
        .attr("d", path)
        .style("opacity", OPACITY.LINK_DEFAULT);


      link.exit().remove();


      linkEnter = link.enter().append("path")
        .attr("class", "link")
        .style("fill", "none");

      linkEnter.on('mouseenter', function (d) {
        if (!isTransitioning) {
          showTooltip().select(".value").text(function () {
            if (d.direction > 0) {
              return d.source.name + " → " + d.target.name + "\n" + formatNumber(d.value);
            }
            return d.target.name + " ← " + d.source.name + "\n" + formatNumber(d.value);
          });

          d3.select(this)
            .style("stroke", LINK_COLOR)
            .transition()
              .duration(TRANSITION_DURATION / 2)
              .style("opacity", OPACITY.LINK_HIGHLIGHT);
        }
      });

      linkEnter.on('mouseleave', function () {
        if (!isTransitioning) {
          hideTooltip();

          d3.select(this)
            .style("stroke", LINK_COLOR)
            .transition()
              .duration(TRANSITION_DURATION / 2)
              .style("opacity", OPACITY.LINK_DEFAULT);
        }
      });

      linkEnter.sort(function (a, b) { return b.thickness - a.thickness; })
        .classed("leftToRight", function (d) {
          return d.direction > 0;
        })
        .classed("rightToLeft", function (d) {
          return d.direction < 0;
        })
        .style("marker-end", function () {
          return 'url(#arrowHead)';
        })
        .style("stroke", LINK_COLOR)
        .style("opacity", 0)
        .transition()
          .delay(TRANSITION_DURATION)
          .duration(TRANSITION_DURATION)
          .attr("d", path)
          .style("stroke-WIDTH", function (d) { return Math.max(1, d.thickness); })
          .style("opacity", OPACITY.LINK_DEFAULT);


      node = svg.select("#nodes").selectAll(".node")
          .data(biHiSankey.collapsedNodes(), function (d) { return d.id; });


      node.transition()
        .duration(TRANSITION_DURATION)
        .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
        .style("opacity", OPACITY.NODE_DEFAULT)
        .select("rect")
          .style("fill", function (d) {
            d.color = colorScale(d.type.replace(/ .*/, ""));
            return d.color;
          })
          .style("stroke", function (d) { return d3.rgb(colorScale(d.type.replace(/ .*/, ""))).darker(0.1); })
          .style("stroke-WIDTH", "1px")
          .attr("height", function (d) { return d.height; })
          .attr("width", biHiSankey.nodeWidth());


      node.exit()
        .transition()
          .duration(TRANSITION_DURATION)
          .attr("transform", function (d) {
            var collapsedAncestor, endX, endY;
            collapsedAncestor = d.ancestors.filter(function (a) {
              return a.state === "collapsed";
            })[0];
            endX = collapsedAncestor ? collapsedAncestor.x : d.x;
            endY = collapsedAncestor ? collapsedAncestor.y : d.y;
            return "translate(" + endX + "," + endY + ")";
          })
          .remove();


      nodeEnter = node.enter().append("g").attr("class", "node");

      nodeEnter
        .attr("transform", function (d) {
          var startX = d._parent ? d._parent.x : d.x,
              startY = d._parent ? d._parent.y : d.y;
          return "translate(" + startX + "," + startY + ")";
        })
        .style("opacity", 1e-6)
        .transition()
          .duration(TRANSITION_DURATION)
          .style("opacity", OPACITY.NODE_DEFAULT)
          .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

      nodeEnter.append("text");
      nodeEnter.append("rect")
        .style("fill", function (d) {
          d.color = colorScale(d.type.replace(/ .*/, ""));
          return d.color;
        })
        .style("stroke", function (d) {
          return d3.rgb(colorScale(d.type.replace(/ .*/, ""))).darker(0.1);
        })
        .style("stroke-WIDTH", "1px")
        .attr("height", function (d) { return d.height; })
        .attr("width", biHiSankey.nodeWidth());

      node.on("mouseenter", function (g) {
        if (!isTransitioning) {
          restoreLinksAndNodes();
          highlightConnected(g);
          fadeUnconnected(g);

          d3.select(this).select("rect")
            .style("fill", function (d) {
              d.color = d.netFlow > 0 ? INFLOW_COLOR : OUTFLOW_COLOR;
              return d.color;
            })
            .style("stroke", function (d) {
              return d3.rgb(d.color).darker(0.1);
            })
            .style("fill-opacity", OPACITY.LINK_DEFAULT);

          tooltip
            .style("left", g.x + MARGIN.LEFT + "px")
            .style("top", g.y + g.height + MARGIN.TOP + 15 + "px")
            .transition()
              .duration(TRANSITION_DURATION)
              .style("opacity", 1).select(".value")
              .text(function () {
                return g.name + "\nFlujo: " + formatFlow(g.netFlow);
              });
        }
      });

      node.on("mouseleave", function () {
        if (!isTransitioning) {
          hideTooltip();
          restoreLinksAndNodes();
        }
      });

      node.filter(function (d) { return d.children.length; })
        .on("dblclick", showHideChildren);

      // allow nodes to be dragged to new positions
      node.call(d3.behavior.drag()
        .origin(function (d) { return d; })
        .on("dragstart", function () { this.parentNode.appendChild(this); })
        .on("drag", dragmove));

      // add in the text for the nodes
      node.filter(function (d) { return d.value !== 0; })
        .select("text")
          .attr("x", -6)
          .attr("y", function (d) { return d.height / 2; })
          .attr("dy", ".35em")
          .attr("text-anchor", "end")
          .attr("transform", null)
          .text(function (d) { return d.name; })
        .filter(function (d) { return d.x < WIDTH / 2; })
          .attr("x", 6 + biHiSankey.nodeWidth())
          .attr("text-anchor", "start");


      collapser = svg.select("#collapsers").selectAll(".collapser")
        .data(biHiSankey.expandedNodes(), function (d) { return d.id; });


      collapserEnter = collapser.enter().append("g").attr("class", "collapser");

      collapserEnter.append("circle")
        .attr("r", COLLAPSER.RADIUS)
        .style("fill", function (d) {
          d.color = colorScale(d.type.replace(/ .*/, ""));
          return d.color;
        });

      collapserEnter
        .style("opacity", OPACITY.NODE_DEFAULT)
        .attr("transform", function (d) {
          return "translate(" + (d.x + d.width / 2) + "," + (d.y + COLLAPSER.RADIUS) + ")";
        });

      collapserEnter.on("dblclick", showHideChildren);

      collapser.select("circle")
        .attr("r", COLLAPSER.RADIUS);

      collapser.transition()
        .delay(TRANSITION_DURATION)
        .duration(TRANSITION_DURATION)
        .attr("transform", function (d, i) {
          return "translate("
            + (COLLAPSER.RADIUS + i * 2 * (COLLAPSER.RADIUS + COLLAPSER.SPACING))
            + ","
            + (-COLLAPSER.RADIUS - OUTER_MARGIN)
            + ")";
        });

      collapser.on("mouseenter", function (g) {
        if (!isTransitioning) {
          showTooltip().select(".value")
            .text(function () {
              return g.name + "\n(Double click to collapse)";
            });

          var highlightColor = highlightColorScale(g.type.replace(/ .*/, ""));

          d3.select(this)
            .style("opacity", OPACITY.NODE_HIGHLIGHT)
            .select("circle")
              .style("fill", highlightColor);

          node.filter(function (d) {
            return d.ancestors.indexOf(g) >= 0;
          }).style("opacity", OPACITY.NODE_HIGHLIGHT)
            .select("rect")
              .style("fill", highlightColor);
        }
      });

      collapser.on("mouseleave", function (g) {
        if (!isTransitioning) {
          hideTooltip();
          d3.select(this)
            .style("opacity", OPACITY.NODE_DEFAULT)
            .select("circle")
              .style("fill", function (d) { return d.color; });

          node.filter(function (d) {
            return d.ancestors.indexOf(g) >= 0;
          }).style("opacity", OPACITY.NODE_DEFAULT)
            .select("rect")
              .style("fill", function (d) { return d.color; });
        }
      });

      collapser.exit().remove();

    }

    var exampleNodes = [
    {"type":"Telestar","id":"a","parent":null,"name":"Telestar"},
    {"type":"Netline","id":"b","parent":null,"name":"Netline"},
    {"type":"WOM","id":"c","parent":null,"name":"WOM"},
    {"type":"Movistar","id":"d","parent":null,"name":"Movistar"},
    {"type":"GTD Movil","id":"e","parent":null,"name":"GTD Movil"},
    {"type":"Mobilink","id":"f","parent":null,"name":"Mobilink"},
    {"type":"Claro","id":"g","parent":null,"name":"Claro"},
    {"type":"Entel","id":"h","parent":null,"name":"Entel"},
    {"type":"VTR","id":"i","parent":null,"name":"VTR"},
    {"type":"Virgin","id":"j","parent":null,"name":"Virgin"},
    {"type":"Falabella","id":"k","parent":null,"name":"Falabella"},
    {"type":"Simple","id":"l","parent":null,"name":"Simple"},
    {"type":"OPS","id":"m","parent":null,"name":"OPS"}
    ]

    var exampleLinks = [
    {"source":"a","target":"b","value":3},
    {"source":"a","target":"c","value":39},
    {"source":"a","target":"d","value":242},
    {"source":"a","target":"e","value":2},
    {"source":"a","target":"g","value":312},
    {"source":"a","target":"h","value":251},
    {"source":"a","target":"i","value":6},
    {"source":"a","target":"j","value":182},
    {"source":"a","target":"k","value":6},
    {"source":"a","target":"l","value":5},
    {"source":"b","target":"a","value":7},
    {"source":"b","target":"c","value":28},
    {"source":"b","target":"d","value":280},
    {"source":"b","target":"e","value":1},
    {"source":"b","target":"g","value":214},
    {"source":"b","target":"h","value":146},
    {"source":"b","target":"i","value":23},
    {"source":"b","target":"j","value":237},
    {"source":"b","target":"k","value":9},
    {"source":"b","target":"l","value":14},
    {"source":"c","target":"a","value":31},
    {"source":"c","target":"b","value":46},
    {"source":"c","target":"d","value":69687},
    {"source":"c","target":"e","value":83},
    {"source":"c","target":"g","value":59747},
    {"source":"c","target":"h","value":46473},
    {"source":"c","target":"i","value":5831},
    {"source":"c","target":"j","value":18518},
    {"source":"c","target":"k","value":1345},
    {"source":"c","target":"l","value":470},
    {"source":"d","target":"a","value":2479},
    {"source":"d","target":"b","value":751},
    {"source":"d","target":"c","value":238376},
    {"source":"d","target":"e","value":2418},
    {"source":"d","target":"f","value":30},
    {"source":"d","target":"g","value":1083899},
    {"source":"d","target":"h","value":743863},
    {"source":"d","target":"i","value":59228},
    {"source":"d","target":"j","value":175312},
    {"source":"d","target":"k","value":12821},
    {"source":"d","target":"l","value":2718},
    {"source":"d","target":"m","value":744},
    {"source":"e","target":"a","value":2},
    {"source":"e","target":"b","value":2},
    {"source":"e","target":"c","value":460},
    {"source":"e","target":"d","value":1449},
    {"source":"e","target":"g","value":823},
    {"source":"e","target":"h","value":805},
    {"source":"e","target":"i","value":99},
    {"source":"e","target":"j","value":125},
    {"source":"e","target":"k","value":15},
    {"source":"e","target":"l","value":2},
    {"source":"g","target":"a","value":1630},
    {"source":"g","target":"b","value":771},
    {"source":"g","target":"c","value":217768},
    {"source":"g","target":"d","value":806531},
    {"source":"g","target":"e","value":1766},
    {"source":"g","target":"f","value":14},
    {"source":"g","target":"h","value":557891},
    {"source":"g","target":"i","value":41525},
    {"source":"g","target":"j","value":183034},
    {"source":"g","target":"k","value":10834},
    {"source":"g","target":"l","value":1664},
    {"source":"g","target":"m","value":593},
    {"source":"h","target":"a","value":2107},
    {"source":"h","target":"b","value":980},
    {"source":"h","target":"c","value":263455},
    {"source":"h","target":"d","value":900502},
    {"source":"h","target":"e","value":3048},
    {"source":"h","target":"f","value":86},
    {"source":"h","target":"g","value":991434},
    {"source":"h","target":"i","value":66326},
    {"source":"h","target":"j","value":205464},
    {"source":"h","target":"k","value":18886},
    {"source":"h","target":"l","value":3671},
    {"source":"h","target":"m","value":807},
    {"source":"i","target":"a","value":15},
    {"source":"i","target":"b","value":7},
    {"source":"i","target":"c","value":14561},
    {"source":"i","target":"d","value":22541},
    {"source":"i","target":"e","value":50},
    {"source":"i","target":"g","value":19540},
    {"source":"i","target":"h","value":17487},
    {"source":"i","target":"j","value":2540},
    {"source":"i","target":"k","value":382},
    {"source":"i","target":"l","value":71},
    {"source":"j","target":"a","value":138},
    {"source":"j","target":"b","value":144},
    {"source":"j","target":"c","value":36309},
    {"source":"j","target":"d","value":37877},
    {"source":"j","target":"e","value":106},
    {"source":"j","target":"g","value":48820},
    {"source":"j","target":"h","value":24667},
    {"source":"j","target":"i","value":2204},
    {"source":"j","target":"k","value":1639},
    {"source":"j","target":"l","value":2015},
    {"source":"k","target":"a","value":27},
    {"source":"k","target":"b","value":11},
    {"source":"k","target":"c","value":6016},
    {"source":"k","target":"d","value":9068},
    {"source":"k","target":"e","value":22},
    {"source":"k","target":"g","value":12085},
    {"source":"k","target":"h","value":4658},
    {"source":"k","target":"i","value":485},
    {"source":"k","target":"j","value":4698},
    {"source":"k","target":"l","value":200},
    {"source":"l","target":"b","value":1},
    {"source":"l","target":"c","value":706},
    {"source":"l","target":"d","value":162},
    {"source":"l","target":"e","value":1},
    {"source":"l","target":"g","value":23},
    {"source":"l","target":"h","value":145},
    {"source":"l","target":"i","value":15},
    {"source":"l","target":"j","value":251},
    {"source":"l","target":"k","value":14},
      ]

    biHiSankey
      .nodes(exampleNodes)
      .links(exampleLinks)
      .initializeNodes(function (node) {
        node.state = node.parent ? "contained" : "collapsed";
      })
      .layout(LAYOUT_INTERATIONS);

    disableUserInterractions(2 * TRANSITION_DURATION);

    update();

})
app.controller('MainCtrl', function($scope) {

});
