(function(){var nav = document.getElementById("chordPro_nav");nav.innerHTML = '<script>var midiAccess = null;var midiInputs = null;var midiOutputs = null;var C = 60;var D = 62;var E = 64;var F = 65;var G = 67;var A = 69;var B = 71;var m = -1;function setup(){if(window.navigator.requestMIDIAccess){window.navigator.requestMIDIAccess({sysex:false}).then( success);}function setupEventHandler(){var inputs = [];var iter = midiAccess.inputs.values();for (var o = iter.next(); !o.done; o = iter.next()) {inputs.push(o.value);}var outputs = [];var iter=midiAccess.outputs.values();for (var o = iter.next(); !o.done; o = iter.next()){outputs.push(o.value);}midiInputs = inputs;midiOutputs = outputs;}function success(access){midiAccess = access;midiAccess.onstatechange = function(event){var port = event.port;};setupEventHandler();}}function noteOff(){var iter = midiAccess.outputs.values();for (var o = iter.next(); !o.done; o = iter.next()){o.value.send( [0x80, 60, 0x00] , window.performance.now() );}}function noteOn(note, suf){var iter = midiAccess.outputs.values();for (var o = iter.next(); !o.done; o = iter.next()){o.value.send( [0x90, note, 0x7f] , window.performance.now() );o.value.send( [0x90, note + 4 + suf, 0x7f], window.performance.now() );o.value.send( [0x90, note+7, 0x7f], window.performance.now() );}};window.onload = function(){setup();}</script>';})();