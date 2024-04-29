case 'plist':
conn.relayMessage(from, { viewOnceMessage: { message: { interactiveMessage: { header: { title: 'Lista' }, body: { text: '💤' }, nativeFlowMessage: { buttons: [ { name: 'single_select', buttonParamsJson: JSON.stringify({ title: 'Click', sections: [ {title: 'Lista', highlight_label: 'Yaoi', rows: [{ title: 'menu1', id: 'menu1' }]}, { highlight_label: 'ON', rows: [{ header: 'Test', title: 's',description: 's', id: 'tes'}] }, { highlight_label: 'ON', rows: [ { header: 'Test', title: 'status', description: 'status', id: 'te' }]}]})}], messageParamsJson: '' }}}}}, {})		
break
