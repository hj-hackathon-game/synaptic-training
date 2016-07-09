var synaptic = require('synaptic');
var network = new synaptic.Architect.Perceptron(20, 20, 10, 6, 3);

var input = [{input: [0,27.194999933242798,1,18.80900001525879,1,26.8439998626709,0,16.61300015449524,1,14.836999893188477,1,12.00600004196167,1,19.361999988555908,1,8.736000061035156,1,14.95199990272522,0,15.728000164031982], output: [1,0,0] },
    {input: [0,23.080999851226807,0,26.938000202178955,0,45.275999784469604,0,18.95300006866455,0,33.4060001373291,1,25.66599988937378,0,38.06100010871887,1,14.996999979019165,0,11.087999820709229,0,12.69100022315979], output: [1,1,0] },
    {input: [0,24.67199993133545,1,9.45300006866455,1,18.486000061035156,0,11.64299988746643,1,16.881999969482422,0,18.21399998664856,1,8.912000179290771,0,8.822999954223633,1,11.421000003814697,0,12.424999952316284], output: [1,0,0] },
    {input: [0,14.994999885559082,0,9.86300015449524,0,6.265999794006348,0,14.109000205993652,1,4.804999828338623,1,8.282999992370605,0,6.80400013923645,0,6.566999912261963,0,3.569999933242798,0,17.317999839782715], output: [1,0,0] },
    {input: [1,4.55400013923645,1,22.207000017166138,1,25.76199984550476,0,20.633000135421753,0,18.72000002861023,1,13.544999837875366,0,9.428000211715698,1,20.115000009536743,1,10.281999826431274,1,29.45300006866455], output: [1,0,0] },
    {input: [1,22.990999937057495,1,20.491000175476074,1,24.944999933242798,0,23.407999992370605,1,7.191999912261963,1,13.216000080108643,0,11.335999965667725,1,13.360000133514404,1,8.831999778747559,0,14.055999994277954], output: [1,1,1] },
    {input: [1,24.200999975204468,1,27.04199981689453,1,33.370999813079834,1,18.604000091552734,1,25.871999979019165,1,23.756999969482422,1,35.86400008201599,1,5.789000034332275,1,11.621999979019165,0,12.213000059127808], output: [0,0,1] },
    {input: [1,18.117000102996826,1,12.41700005531311,1,4.766999959945679,1,4.2809998989105225,1,5.147000074386597,1,8.468999862670898,1,20.13100004196167,1,10.713000059127808,1,18.805000066757202,0,13.573999881744385], output: [1,0,0] },
    {input: [0,15.760999917984009,0,17.680999994277954,0,17.075999975204468,0,18.58899998664856,1,8.194999933242798,1,21.467000007629395,1,5.206000089645386,1,7.520999908447266,0,6.389000177383423,1,9.72599983215332], output: [1,0,0] },
    {input: [1,21.039000034332275,1,13.979000091552734,1,22.867999792099,0,59.50600004196167,1,11.355000019073486,1,59.91799998283386,1,15.337000131607056,1,23.31499981880188,1,10.169000148773193,0,16.876999855041504], output: [0,0,0] },
    {input: [1,11.80400013923645,1,27.793999910354614,1,10.056999921798706,1,20.998000144958496,1,7.809000015258789,0,21.711999893188477,0,11.450999975204468,1,12.766000032424927,1,7.328999996185303,0,5.985000133514404], output: [0,1,0] },
    {input: [1,417.8510000705719,1,9.075999975204467,1,74.60500001907348,1,68.23600006103515,0,87.83599996566772,1,9.51200008392334,1,12.815999984741211,1,13.585000038146972,1,4.5269999504089355,0,11.425999879837036], output: [1,0,0] },
    {input: [1,12.573999881744385,1,8.776000022888184,1,673.8770000934601,0,15.463000059127808,0,19.75499987602234,1,12.095999956130981,1,14.501999855041504,1,12.303999900817871,1,5.14900016784668,0,5.001999855041504], output: [1,0,0] },
    {input: [0,26.294999837875366,1,120.3030002117157,0,15.918999910354614,0,14.244999885559082,0,29.201000213623047,1,15.171000003814697,0,13.48199987411499,1,12.77999997138977,1,7.238000154495239,0,19.27999997138977], output: [1,1,1] },
    {input: [1,98.84500002861023,0,48.401999950408936,0,59.0460000038147,0,17.95799994468689,1,22.914000034332275,1,125.31299996376038,0,36.57100009918213,1,19.757999897003174,0,8.121000051498413,1,15.273000001907349], output: [1,1,1] }];

for (var i = 0; i < input.length; i++){
    for (var j = 1; j < 20; j+=2){
        input[i].input[j] /= 60;
        if (input[i].input[j] > 1){
            input[i].input[j] = 1;
        }
    }
}


// console.log(JSON.stringify(input));
var trainer = new synaptic.Trainer(network);
trainer.train(input, {
    rate: .01,
    iterations: 20000,
    error: .005,
    shuffle: true,
    log: 1000,
    cost: synaptic.Trainer.cost.CROSS_ENTROPY
});

console.log(network.standalone().toString());