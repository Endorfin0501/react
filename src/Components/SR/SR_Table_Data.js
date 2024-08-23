// src/data.js
export const LtableData1 = [
    {
      section: 'A1',
      items:[
        {
          item: '機台外觀部份(含成型台)',
          methods:[
            {
              method: '目視\n手動',
              standards: [
                '1.目視外觀塗裝是否良好',
                '2.目視機身外觀是否無變形現象',
                '3.目視焊道及接頭是否正確良好',
                '4.安裝防震腳墊是否無干涉現象',
                '5.機台定位後是否使用水平尺校驗'
                ],
                results: [
                  {values: ['是', '否', '是', '否', ] }
                ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
      section: 'A2',
      items:[
        {
          item: '機身與模架底板安裝',
          methods:[
            {
              method: '目視\n手動\n量測',
              standards: [
                '1.安裝時是否無干涉現象',
                '2.機身及模架底板孔位是否正常',
                '3.安裝時是否牢固確實',
                '4.螺絲鎖緊並依螺絲規格上磅數 \n螺絲規格:{input}\n磅數:{input}\n品保覆驗人員:{input}',
              ],
              results: [
                {values: ['是', '否', '是', '否',] }
              ],
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
        section: 'A3',
        items:[
          {
            item: '成型組裝',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.安裝時是否無干涉現象',
                  '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '3.安裝後動作正確且無損料',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A4',
        items:[
          {
            item: '成型底模組組裝',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.安裝時是否無干涉現象',
                  '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '3.安裝後動作正確且無損料',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A5',
        items:[
          {
            item: '成型連桿組組裝',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.安裝時是否無干涉現象',
                  '2.安裝時是否牢固確實',
                  '3.安裝後動作正確且無損料',
                ],
                results: [
                  {values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      }

  ];
//===================================================================================================
  export  const LtableData2 = [
    {
      section: 'A6',
      items:[
        {
          item: '成型模板組組裝',
          methods:[
            {
              method: '目視\n手動',
              standards: [
                '1.安裝時是否無干涉現象',
                '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                '3.安裝後動作正確且無損料',
              ],
              results: [
                {values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
      section: 'A7',
      items:[
        {
          item: '成型系統',
          methods:[
            {
              method: '手動',
              standards: [
                '1.系統完成組裝後，以手推動是否順暢',
                '2.定位桿是否安裝牢固',
                '3.安裝時是否牢固確實',
              ],
              results: [
                { values: ['是', '否', '是', '否',] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
        section: 'A8',
        items:[
          {
            item: '頂板安裝(一)',
            methods:[
              {
                method: '目視\n手動\n量測',
                standards: [
                  '1.安裝時是否無干涉現象',
                  '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '3.螺絲鎖緊並依螺絲規格上磅數\n螺絲規格:{input}\n磅數:{input}\n品保覆驗人員:{input}',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A9',
        items:[
          {
            item: '封口系統組組裝',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.安裝時是否無干涉現象',
                  '2.安裝時是否牢固確實',
                  '3.封口作動測試是否順暢、漏氣測試時間：1小時 (測試台測試)',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A10',
        items:[
          {
            item: '拉桿系統組組裝(含齒排)',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.安裝時是否無干涉現象',
                  '2.安裝時是否牢固確實',
                  '3.伺服馬達安裝是否正確',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A11',
        items:[
          {
            item: '脫胚爪系統組裝',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.變節距夾爪安裝是否確實',
                  '2.變節距夾爪安裝是否無干涉現象',
                  '3.手動測試功能是否正常',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      }

  ];
  
  //===========================================================================================

  export  const LtableData3 = [
    {
      section: 'A12',
      items:[
        {
          item: '線軌軌道組組裝(含軌道固定座)',
          methods:[
            {
              method: '目視\n手動\n量測',
              standards: [
                '1.料件安裝時是否無干涉現象',
                '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                '3.線軌平行度標準0.03mm',
                '4.品保覆驗人員:{input}\n覆驗平行度:{input}'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
      section: 'A13',
      items:[
        {
          item: '變節距夾臂校正組裝作業',
          methods:[ 
            {
              method:'目視\n手動',
              standards: [
                '1.料件安裝時是否無干涉',
                '2.料件是否有色差之現象',
                '3.安裝時是否牢固確實',
              ],
              results: [
                { values: ['是', '否', '是', '否',] }
              ]
            },
              {
                method:'量測(間距)112 +0.10/-0',
                standards:['1.{input}2.{input}3.{input}4.{input}\n5.{input}6.{input}7.{input}8.{input}\n9.{input}10.{input}11.{input}12.{input}\n'],
                results: [
                  { values: ['是', '否', '是', '否',] }
                ]
              },
              {
                method:'量測(垂直度)0.05以內',
                standards:['1.{input}2.{input}3.{input}4.{input}\n5.{input}6.{input}7.{input}8.{input}\n9.{input}10.{input}11.{input}12.{input}\n'],
                results: [
                  { values: ['是', '否', '是', '否',] }
                ]
              },
              {
                method:'',
                standards:['品保覆驗人員{input}  (CP-QO-227 L機-變節距夾具組檢驗標準作業流程書)'],
                results: [
                  { values: ['是', '否', '是', '否',] }
                ]
              }
            ],
        },
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
        section: 'A14',
        items:[
          {
            item: '變節距系統組',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.料件安裝時是否無干涉現象',
                  '2.安裝時是否牢固確實',
                  '3.安裝後以手推動是否順暢',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A15',
        items:[
          {
            item: '變節距動力組',
            methods:[
              {
                method: '目視\n手動\n量測',
                standards: [
                  '1.時規皮帶輪及皮帶安裝是否正確',
                  '2.安裝時是否牢固確實',
                  '3.使用皮帶張力器測試皮帶張力(CP-QO-237皮帶張力測試檢測標準操作說明)',
                  '4.品保覆驗人員:{input}\n標準:{input}\n實測:{input}'
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      }
  ];

  //====================================================================================================

  export  const LtableData4 = [
    {
      section: 'A16',
      items:[
        {
          item: '胚頭座組組裝(自轉組件)',
          methods:[
            {
              method: '目視\n手動',
              standards: [
                '1.料件安裝是否正確牢固',
                '2.手動轉動是否順暢，不可卡死',
                '3.安裝時是否牢固確實',
                '4.系統結合後手推是否順暢',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
      section: 'A17',
      items:[
        {
          item: '加熱/反射箱組裝(機上安裝)',
          methods:[
            {
              method: '目視\n手動',
              standards: [
                '1.料件安裝時是否無干涉現象',
                '2.安裝時是否牢固確實',
                '3.系統組件安裝上機是否確實',
                '4.水道螺絲是否牢固確實'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
        section: 'A18',
        items:[
          {
            item: '機台下組裝作業',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.鼓風機是否安裝定位',
                  '2.高(低)壓力容器是否安裝固定牢固',
                  '3.鼓風機方向及管路是否安裝正確',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A19',
        items:[
          {
            item: '機台冷卻(凍)管路安裝作業',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.冷卻(凍)管路安裝是否定位確實',
                  '2.管路是否完成測漏檢測(目視)',
                  '3.管路是否固定牢固鎖緊',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A20',
        items:[
          {
            item: '橫移夾爪固定座前置作業',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.橫移夾爪固定座外觀是否正常',
                  '2.夾爪缸安裝是否鎖緊確認',
                  '3.電控是否事先完成配線作業',
                  '4.配線是否整齊配置排列',
                  '5.手動推動是否順暢'
                ],
                rresults: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
  ];  

  //============================================================================================

  export  const LtableData5 = [
    {
      section: 'A21',
      items:[
        {
          item: '壓胚組組裝',
          methods:[
            {
              method: '目視\n手動',
              standards: [
                '1.料件安裝時是否無干涉現象',
                '2.安裝時是否牢固確實',
                '3.手動測試動作是否順暢正常',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
      section: 'A22',
      items:[
        {
          item: '入胚轉輪組組裝',
          methods:[
            {
              method: '目視\n手動',
              standards: [
                '1.料件安裝時是否無干涉現象',
                '2.安裝時是否牢固確，螺絲鎖緊',
              ],
              results: [
                {values: ['是', '否', '是', '否',] }
              ]
            }
          ],
        },
        {
          item: 'CP-QO-272入胚總組高低差量測',
          methods:[
            {
              method: '',
              standards: [
                '入胚盤高度記錄:{input}\n入胚盤修配墊圈修配尺寸:{input}\n}外軌道墊圈修配塊尺寸：\n1.{input}\n2.{input}\n3.{input}\n4.{input}\n',
              ],
              results: [
                { values: ['是', '否', '是', '否',] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
        section: 'A23',
        items:[
          {
            item: '公轉座安裝作業(主傳動組)',
            methods:[
              {
                method: '目視\n手動\n量測',
                standards: [
                  '1.料件安裝時是否無干涉現象',
                  '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '3.公轉頂壓氣缸是否調整OK',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          },
          {
            item: 'CP-QO-192L機系列主傳動組製程檢驗標準作業流程',
            methods:[
              {
                method: '',
                standards: [
                  '品保覆驗人員:{input}\n標準: ±0.05mm  實測:{input}',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A24',
        items:[
          {
            item: '變節距夾爪作動校正',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.夾爪與脫胚系統是否校正完成',
                  '2.夾爪彈力是否正常一致動作',
                  '3.夾爪與瓶胚是否調校對準',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A25',
        items:[
          {
            item: '電磁閥固定作業(PU配管作業)',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.機台控制閥體是否固定正確',
                  '2.閥體管路是否固定配管完成',
                  '3.動作測試是否正常',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A26',
        items:[
          {
            item: '尼龍軟管配管作業',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.配管方式方向動作是否正確',
                  '2.配管後實測無漏氣(水)現象',
                  '3.管路是否整齊順暢',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
  ];  

  //=================================================================================================

  export  const LtableData6 = [
    {
      section: 'A27',
      items:[
        {
          item: '出瓶風送道安裝(外商)',
          methods:[
            {
              method: '目視\n手動',
              standards: [
                '1.安裝位置是否正確無缺料',
                '2.安裝後動作測試是否正常',
                '3.瓶子送出是否順暢無干涉',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
      section: 'A28',
      items:[
        {
          item: '整列機安裝(外商)',
          methods:[
            {
              method: '目視\n手動',
              standards: [
                '1.整列機是否完成安裝並牢固',
                '2.整列機動作測試是否正常',
                '3.整列機外觀是否良好',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
        section: 'A29',
        items:[
          {
            item: '入胚滑軌組安裝(外商)',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.安裝時是否無干涉現象',
                  '2.安裝時是否牢固正確',
                  '3.安裝後是否可以順暢調整',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A30',
        items:[
          {
            item: '硬管路安裝(外商)',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.硬管路配管是否正確',
                  '2.硬管路測漏是否正常',
                  '3.硬管路是否完成固定',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A31',
        items:[
          {
            item: '配線管路安裝',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.配線是否正確，依配線圖執行',
                  '2.配線後固定螺絲牢固確實',
                  '配線人員:{input}',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: 'A32',
        items:[
          {
            item: '配線管路安裝',
            methods:[
              {
                method: '目視\n手動',
                standards: [
                  '1.程式版次:{input}',
                  '2.安裝人員:{input}',
                  '3.安裝後功能測試是否正常',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
  ];  

  //=====================================================================================================

  export  const LtableData7 = [
    {
      section: '測1',
      items:[
        {
          item: '入胚系統(瓶口安裝)',
          methods:[
            {
              method: '手動',
              standards: [
                '1.入胚止擋氣壓動作是否正常',
                '2.入胚轉盤轉動是否正常無干涉',
                '3.入胚導軌安裝是否無干涉現象',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
      section: '測2',
      items:[
        {
          item: '壓胚系統(瓶口安裝)',
          methods:[
            {
              method: '手動',
              standards: [
                '1壓胚動作測試是否正確',
                '2.胚頭瓶口配件是否安裝無干涉',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="組裝簽名"/>}
    },
    {
        section: '測3',
        items:[
          {
            item: '脫胚系統',
            methods:[
              {
                method: '手動',
                standards: [
                  '1.安裝時是否無干涉現象',
                  '2.安裝時是否牢固正確',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: '測4',
        items:[
          {
            item: '變節距系統(瓶口安裝)',
            methods:[
              {
                method: '手動',
                standards: [
                  '1.動作時是否正常且無干涉現象',
                  '2.脫胚瓶口料安裝正確且牢固',
                  '3.夾爪測試是否正常',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: '測5',
        items:[
          {
            item: '封口組系統(瓶口安裝)',
            methods:[
              {
                method: '手動',
                standards: [
                  '1.封口及拉桿上下動作時是否正常',
                  '2.瓶口料件精密螺帽是否鎖緊牢固',
                  '3.高壓吹電磁閥組動作是否正常',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: '測6',
        items:[
          {
            item: '橫移夾爪系統(瓶口安裝)',
            methods:[
              {
                method: '手動',
                standards: [
                  '1.動作是否正常且無干涉現象',
                  '2.夾爪瓶口料件安裝正確.螺絲鎖緊',
                  '3.夾爪缸感應SENSOR是否正常',
                  '4.橫移夾爪不可有漏氣之情況'
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
      {
        section: '測7',
        items:[
          {
            item: '整機測試',
            methods:[
              {
                method: '手動',
                standards: [
                  '1.整機連線動作是否正常',
                  '2.整機連線調校是否完成',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="組裝簽名"/>}
      },
  ];  

  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  export const PtableData1 = [
    {
      section: '1P-1',
      items:[
        {
          item: '機身組\n鈑金組(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.機台鈑金組裝是否與周邊無干涉\n2.鈑金門開關是否順暢無變形',
                '3.機台鈑金PC板安裝是否確實無刮傷',
                '4.機台鈑金與鈑金間之間隙是否平均,間隙2mm-3mm'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '2P-1',
      items:[
        {
          item: '入胚出瓶組\n壓胚組(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                '2.安裝時料件是否無干涉現象',
                '3.安裝後是否無缺料、破損及作用不良',
                '4.管路配置是否正確無干涉現象'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
        section: '2P-2',
        items:[
          {
            item: '入胚出瓶組\n機械手組(製造組裝)	',
            methods:[
              {
                method: '目視/手動',
                standards: [
                  '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '2.安裝時料件是否無干涉現象',
                  '3.安裝後是否無缺料、破損及作用不良',
                  '4.管路配置是否正確無干涉現象'
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="人員簽名"/>}
      },
      {
        section: '2P-3',
        items:[
          {
            item: '入胚出瓶組\n入胚滑台座組(製造組裝)',
            methods:[
              {
                method: '目視/手動',
                standards: [
                  '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '2.安裝時料件是否無干涉現象',
                  '3.安裝後是否無缺料、破損及作用不良',
                  '4.管路配置是否正確無干涉現象'
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="人員簽名"/>}
      },
      {
        section: '2P-4',
        items:[
          {
            item: '入胚出瓶組\n入胚導軌(製造組裝)',
            methods:[
              {
                method: '目視/手動',
                standards: [
                  '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '2.安裝時料件是否無干涉現象',
                  '3.安裝後是否無缺料、破損及作用不良',
                  '4.感應器線路是否固定且正確良好'
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="人員簽名"/>}
      },
  ];  

  //======================================================================================

  export  const PtableData2 = [
    {
      section: '3P-1',
      items:[
        {
          item: '內外軌道(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                '2.安裝時料件是否無干涉現象',
                '3.安裝後是否無缺料、破損及作用不良',
                '4.軸承座or定距塊or公轉滑塊以手推動方式確認是否順暢'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '3P-2',
      items:[
        {
          item: '公自轉組\n自傳馬達座(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                '2.安裝時料件是否無干涉現象',
                '3.安裝後是否無缺料、破損及作用不良',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
        section: '3P-3',
        items:[
          {
            item: '公自轉組\n自傳鍊輪(製造組裝)',
            methods:[
              {
                method: '目視/手動',
                standards: [
                  '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '2.安裝時料件是否無干涉現象',
                  '3.鏈條鬆緊度及可調整閥是否正常',
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="人員簽名"/>}
      },
      {
        section: '3P-4',
        items:[
          {
            item: '公自轉組(製造組裝)',
            methods:[
              {
                method: '目視/手動',
                standards: [
                  '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                  '2.安裝時料件是否無干涉現象',
                  '3.安裝後是否無缺料、破損及作用不良',
                  '4.各C扣環是否確實定位',
                  '5.公轉組是否經獨立測試運轉正常(氣壓4kg以下是否動作正常)',
                  '6.入加熱箱感應及出瓶感應器安裝位置是否正確',
                  '7.移位閉鎖系統是否正常動作，無干涉現象發生'
                ],
                results: [
                  { values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ],
        sign:{type: <input placeholder="人員簽名"/>}
      },
  ];  

//===================================================================================================

export  const PtableData3 = [
  {
    section: '4P-1',
    items:[
      {
        item: '加熱箱組(製造組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
              '2.安裝時料件是否無干涉現象',
              '3.安裝後是否無缺料、破損及作用不良',
              '4.翻轉是否正常',
              '5.管路配置固定是否良好(進水為黑色、出口為紅色)'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '4P-2',
    items:[
      {
        item: '反射箱組(製造組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
              '2.安裝時料件是否無干涉現象',
              '3.安裝後是否無缺料、破損及作用不良',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
      section: '5P-1',
      items:[
        {
          item: '成形組\n開關模組(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                '2.安裝時料件是否無干涉、缺料、破損及作用不良',
                '3.開關模壓力(氣壓：5kg以下；油壓：45kg以下)，即可作動良好 (全電機種此項不需檢測)',
                '4.作動測試8小時是否完成'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '5P-2',
      items:[
        {
          item: '成形組底模座(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
                '2.安裝時料件是否無干涉現象',
                '3.安裝後是否無缺料、破損及作用不良',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '5P-3',
      items:[
        {
          item: '校模間距(製造至調校)(品保覆驗)',
          methods:[
            {
              method: '繼足式分厘卡量測',
              standards: [
                '詳見附件二公差表，組裝後調校:\n左上{input}\n右上{input}\n左下{input}\n右下{input}\n\n\n詳見附件二公差表，終檢後測量:\n左上{input}\n右上{input}\n左下{input}\n右下{input}\n'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{ type: [<input placeholder="制造簽名" />, <input placeholder="品保簽名" />] }
    },
]; 
//===================================================================================================

export  const PtableData4 = [
  {
    section: '5P-4',
    items:[
      {
        item: '模具背板組(製造組裝)(品保覆驗)',
        methods:[
          {
            method: '目視/手動厚薄規',
            standards: [
              '1.安裝時是否牢固確實，螺絲鎖緊劃線請依附件一螺絲扭力規定上磅數',
              '2.安裝時料件是否無干涉現象',
              '3.模具背板與內外模板浮動距離為0.5mm±0.1mm。\n檢驗數據:{input}\n品保人員{input}\n',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '5P-5',
    items:[
      {
        item: '開關模組及拉吹組\n近接開關感應間距(製造組裝)',
        methods:[
          {
            method: '厚薄規',
            standards: [
              '2~3mm',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
      section: '6P-1',
      items:[
        {
          item: '拉吹組(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.安裝時是否牢固確實，螺絲鎖緊劃線請依附件一螺絲扭力規定上磅數',
                '2.安裝時料件是否無干涉、缺料、破損及作用不良',
                '3.拉桿和拉桿襯套裝置是否方向正確',
                '4.手動測試是否順暢'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '6P-2',
      items:[
        {
          item: '拉吹組-封口缸(製造組裝測試)(品保覆驗)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1安裝時是否牢固確實，螺絲鎖緊劃線請依附件一螺絲扭力規定上磅數',
                '2.安裝時料件是否無干涉現象',
                '3.安裝後是否無缺料、破損及作用不良',
                '4.組裝中是否經手動閥測試正常有無漏氣之現象'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '7P-1',
      items:[
        {
          item: '三點組合(製造組裝)',
          methods:[
            {
              method: '繼足式分厘卡量測',
              standards: [
                '1.安裝時是否牢固確實',
                '2.安裝方向是否正確，各接頭是否上緊固定',
                '3.安裝前油杯杯內是否清潔乾淨',
                '4.油杯是否有加油至8分滿'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/> }
    },
];  

//===================================================================================================

export  const PtableData5 = [
  {
    section: '7P-2',
    items:[
      {
        item: '空壓系統(製造組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.高低壓管路是否正確牢固',
              '2.鎖緊後管路接頭是否無漏氣現象',
              '3.管路長度是否依規定進行配管作業',
              '4.高低壓管路各做一分鐘洩氣管路內是否清潔乾淨',
              '5.安全閥是否閉合正常',
              '6.安全閥卸載開口方向是否未朝向鈑金門或人員'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '8P-1',
    items:[
      {
        item: '冷卻系統(製造組裝)',
        methods:[
          {
            method: '厚薄規',
            standards: [
              '1.配水塊是否牢固、確實且無漏水現象',
              '2.管路進出是否正確'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
      section: '8P-2',
      items:[
        {
          item: '電磁閥(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.電磁閥固定後是否清潔',
                '2.各電磁閥閥體銜接部位螺絲是否固定鎖緊',
                '3.各電磁閥位置是否正確',
                '4.管線是否整齊固定良好且無漏氣之現象'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '檢-1',
      items:[
        {
          item: '各系統組件之潤滑(製造組裝)',
          methods:[
            {
              method: '目視',
              standards: [
                '1是否依要求實施潤滑',
                '2.是否依要求實施編號',
                '3黃油嘴接頭是否無料件干涉，可正常補油',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '檢-2',
      items:[
        {
          item: '整列機(試車人員)(品保人員)	',
          methods:[
            {
              method: '繼足式分厘卡量測',
              standards: [
                '1.瓶胚整列時是否會掉入皮帶處',
                '2.安裝時是否牢固、確實',
                '3.運轉是否順暢無異音或干涉',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: [<input placeholder="制造簽名"/>, <input placeholder="品保簽名"/> ]}
    },
];  

//===================================================================================================

export  const PtableData6 = [
  {
    section: '檢-3',
    items:[
      {
        item: '開關操作(電控、製造)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.電源開關是否作動良好',
              '2.各部感應開關是否作動正常',
              '3.各部緊急停止開關是否作動正常',
              '4.程式版本：{input}',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: [<input placeholder="電控簽名"/>, <input placeholder="制造簽名"/>] }
  },
  {
    section: '檢-4',
    items:[
      {
        item: '警報器(製造組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.警報器位置是否正確牢固鎖緊',
              '2.功能是否正常'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
      section: '檢-5',
      items:[
        {
          item: '預吹壓力引導閥(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.引導閥In/Out裝置位置是否正確',
                '2.引導閥箭頭方向是否正確',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '檢-6',
      items:[
        {
          item: '組裝後自主檢查(製造組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.各管路是否無漏氣、漏水現象	',
                '2.機台螺絲是否依規定鎖緊',
                '3.機台內部是否清潔乾淨',
                '4.各鈑金是否無損傷及脫漆現象',
                '5.製造單位是否依規定進行退料'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '檢-7',
      items:[
        {
          item: '空車運轉(製造組裝',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.各項動作(單動)是否正常',
                '2.空車運轉測試(耐久)是否達24小時',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>,}
    },
    {
      section: '檢-8',
      items:[
        {
          item: '整機測試(製造組裝)',
          methods:[
            {
              method: '手動',
              standards: [
                '1.整機連線動作是否正常',
                '2.整機連線調校是否完成',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>,}
    },
];  

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

export const OtableData1 = [
  {
    section: '1P-1',
    items:[
      {
        item: '機身組\n鈑金組(製造組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.機台鈑金組裝與相關周邊是否無干涉。',
              '2.機台鈑金PC板是否安裝確實。',
              '3.機台鈑金與鈑金間之間隙是否有平均。標準值:3~5mm。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '2P-1',
    items:[
      {
        item: '退瓶組件(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1安裝是否牢固、確實。',
              '2.安裝時料件是否無干涉現象',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.管路配置是否正確無干涉現象',
              '5.氣壓缸動作是否正常。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
      section: '3P-1',
      items:[
        {
          item: '升降迴轉總成－口模組件(組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.安裝是否牢固、確實。',
                '2.安裝時料件是否無干涉現象',
                '3.安裝後是否無缺料、損壞、動作不良現象。',
                '4.管路配置是否正確無干涉現象'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '3P-2',
      items:[
        {
          item: '口模組件(組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.安裝是否牢固、確實。',
                '2.安裝時料件是否無干涉現象',
                '3.安裝後是否無缺料、損壞、動作不良現象。',
                '4.壓縮彈簧組裝作動是否無干涉。'
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
];  

//======================================================================================

export  const OtableData2 = [
  {
    section: '3P-3',
    items:[
      {
        item: '油壓升降組件(組裝)',
        methods:[
          {
            method: '繼足式分厘卡量測',
            standards: [
              '1.間距(由品保覆檢):{input}m/m \n檢驗數據:{input}'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '4P-1',
    items:[
      {
        item: '溫調升降組件(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝是否牢固、確實。',
              '2.安裝時料件是否無干涉現象',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.管路配置是否正確無干涉現象'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
      section: '5P-1',
      items:[
        {
          item: '成型組總成',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.安裝是否牢固、確實。',
                '2.安裝時料件是否無干涉現象',
                '3.導桿、上框架、固定板組裝是否無干涉現象。',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '5P-2',
      items:[
        {
          item: '吹瓶開關模組件(組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.安裝是否牢固、確實。',
                '2.安裝時料件是否無干涉現象',
                '3.安裝後是否無缺料、損壞、動作不良現象。',
                '4.油路是否無漏油。',
                '5.開關模油壓壓力是否為140kg/㎠。',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
];  

//===================================================================================================

export  const OtableData3 = [
{
  section: '5P-3',
  items:[
    {
      item: '成形組件-直壓缸座組(組裝)',
      methods:[
        {
          method: '目視/手動',
          standards: [
            '1.安裝是否牢固、確實。',
            '2.安裝時料件是否無干涉現象',
            '3.安裝後是否無缺料、損壞、動作不良現象。',
            '4.油壓壓力是否為140kg/㎠。',
          ],
          results: [
            { values: ['是', '否', '是', '否', ] }
          ]
        }
      ],
    }
  ],
  sign:{type: <input placeholder="人員簽名"/>}
},
{
  section: '5P-4',
  items:[
    {
      item: '瓶模固定板(組裝)',
      methods:[
        {
          method: '目視/手動',
          standards: [
          '1.安裝是否牢固、確實。',
          '2.安裝時料件是否無干涉現象',
          '3.安裝後是否無缺料、損壞、動作不良現象。',
          ],
          results: [
            { values: ['是', '否', '是', '否', ] }
          ]
        }
      ],
    }
  ],
  sign:{type: <input placeholder="人員簽名"/>}
},
{
    section: '5P-5',
    items:[
      {
        item: '感應組件＆開關模組開關及感應間距(組裝)',
        methods:[
          {
            method: '目視/游標尺卡(或厚薄規檢測）',
            standards: [
            '1.感應間距是否為2~3mm。',
            '2.安裝後是否無缺料、損壞、動作不良現象。',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '5P-6',
    items:[
      {
        item: '成形組基座組件-成形基座(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝是否牢固、確實。',
              '2.安裝時料件是否無干涉現象',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.成形基座與機身定位孔徑及位置是否正確。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '5P-7',
    items:[
      {
        item: '成形組基座組件-導桿組(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝是否牢固、確實。',
              '2.安裝時料件是否無干涉現象',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.導桿與成形基座組裝是否正確。',
              '5.加工料件螺帽及側固螺絲鎖固是否鎖緊。',
              '6.導桿安裝時，配合件動作是否順暢正常。',
              '7.導桿是否無潤滑(安裝塑膠軸承端)。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
]; 
//===================================================================================================

export  const OtableData4 = [
{
  section: '6P-1',
  items:[
    {
      item: '拉伸組總成－預拉伸組件(組裝)',
      methods:[
        {
          method: '目視/手動',
          standards: [
            '1.安裝是否牢固、確實。',
            '2.安裝時料件是否無缺料、損壞、動作不良現象。',
            '3.安裝時料件是否無干涉現象。',
            '4.手動測試是否順暢。',
            '5.管路配置是否正確無干涉現象。'
          ],
          results: [
            { values: ['是', '否', '是', '否', ] }
          ]
        }
      ],
    }
  ],
  sign:{type: <input placeholder="人員簽名"/>}
},
{
  section: '6P-2',
  items:[
    {
      item: '拉伸組總成－拉伸組件(組裝)',
      methods:[
        {
          method: '目視/手動',
          standards: [
            '1.安裝是否牢固、確實。',
            '2.安裝時料件是否無缺料、損壞、動作不良現象。',
            '3.安裝後是否無缺料、損壞、動作不良現象。',
            '4.手動測試是否無漏氣。',
            '5.拉吹動板是否無干涉現象。'
          ],
          results: [
            { values: ['是', '否', '是', '否', ] }
          ]
        }
      ],
    }
  ],
  sign:{type: <input placeholder="人員簽名"/>}
},
{
    section: '6P-3',
    items:[
      {
        item: '拉伸組件-瓶口配件(組裝/校正)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝是否牢固、確實。',
              '2.安裝時料件是否無缺料、損壞、動作不良現象。',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.手動測試是否無漏氣。',
              '5.密封環方向是否正確。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '6P-4',
    items:[
      {
        item: '反壓組件(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝是否牢固、確實。',
              '2.安裝時料件是否無缺料、損壞、動作不良現象。',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.手動測試是否無漏氣。',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
];  

//===================================================================================================

export  const OtableData5 = [
{
  section: '7P-1',
  items:[
    {
      item: '三點組合(組裝)',
      methods:[
        {
          method: '目視/手動',
          standards: [
            '1.安裝是否牢固、確實。',
            '2.安裝是否方向正確，各接頭是否鎖緊固定。',
            '3.安裝是否清潔乾淨。',
            '4.油杯是否有加油。',
          ],
          results: [
            { values: ['是', '否', '是', '否', ] }
          ]
        }
      ],
    }
  ],
  sign:{type: <input placeholder="人員簽名"/>}
},
{
  section: '7P-2',
  items:[
    {
      item: '空壓系統(組裝)',
      methods:[
        {
          method: '目視/手動',
          standards: [
            '1.高低壓管路是否正確牢固與接序正確。',
            '2.一次二次壓是否正確牢固與接序正確。',
            '3.管路是否無漏氣現象。',
            '4.管路長度是否正確配管作業。'
          ],
          results: [
            { values: ['是', '否', '是', '否', ] }
          ]
        }
      ],
    }
  ],
  sign:{type: <input placeholder="人員簽名"/>}
},
{
    section: '7P-3',
    items:[
      {
        item: '空壓系統(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝是否牢固、確實。',
              '2.安裝是否方向正確，各接頭是否鎖緊固定。',
              '3.高低壓管路是否有鎖固、接序位置是否正確。',
              '4.一次二次壓是否有鎖固、接序位置是否正確。',
              '5.油路板合流功能是否正常運作。',
              '6.各管路是否無漏油現象。',
              '7.壓力錶功能是否正常。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '8P-1',
    items:[
      {
        item: '冷卻系統(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.配水塊是否牢固、確實且無漏水現象',
              '2.管路進出是否正確。',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '8P-2',
    items:[
      {
        item: '電磁閥-空壓(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.電磁閥固定後是否清潔乾淨。',
              '2.電磁閥安裝是否牢固、確實。',
              '3.各電磁閥位置是否正確。',
              '4.管線是否整齊、固定良好且無漏氣現象。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/> }
  },
  {
    section: '8P-3',
    items:[
      {
        item: '電磁閥-油壓(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.電磁閥固定後是否清潔乾淨。',
              '2.電磁閥安裝是否牢固、確實。',
              '3.各電磁閥位置是否正確。',
              '4.管路是否整齊、固定良好且無漏油現象。',
              '5.洩壓閥與調壓閥壓力升降是否正常運作。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/> }
  },
];  

//===================================================================================================

export  const OtableData6 = [
{
  section: '11P-1',
  items:[
    {
      item: '胚模升降組件(組裝)',
      methods:[
        {
          method: '目視/手動',
          standards: [
            '1.安裝是否牢固、確實。',
            '2.安裝是否方向正確，各接頭是否鎖緊固定。',
            '3.安裝後是否無缺料、損壞、動作不良現象。',
            '4.密封環方向是否正確。',
            '5.手動測試是否順暢運作。'
          ],
          results: [
            { values: ['是', '否', '是', '否', ] }
          ]
        }
      ],
    }
  ],
  sign:{type: <input placeholder="人員簽名"/>, }
},
{
  section: '11P-2',
  items:[
    {
      item: '射出座組件(組裝)',
      methods:[
        {
          method: '目視/手動',
          standards: [
            '1安裝是否牢固、確實。',
            '2.安裝時料件是否無干涉現象。',
            '3.安裝後是否無缺料、損壞、動作不良現象。',
            '4.空車運轉２４小時動作是否順暢。'
          ],
          results: [
            { values: ['是', '否', '是', '否', ] }
          ]
        }
      ],
    }
  ],
  sign:{type: <input placeholder="人員簽名"/>}
},
{
    section: '11P-3',
    items:[
      {
        item: '閉式射嘴(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝是否牢固、確實。',
              '2.安裝時料件是否無干涉現象。',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.手動測試是否順暢。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '檢-1',
    items:[
      {
        item: '各系統組件之潤滑(組裝)',
        methods:[
          {
            method: '目視',
            standards: [
              '1.是否依要求實施潤滑動作',
              '2.是否無干涉現象發生。',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
    section: '檢-2',
    items:[
      {
        item: '預吹壓力引導閥(組裝',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.引導閥In/Out裝置位置是否正確無誤。',
              '2.引導閥箭頭方向是否正確。',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>,}
  },
];  

//===================================================================================================

export  const OtableData7 = [
  {
    section: '檢-3',
    items:[
      {
        item: '組裝後自主檢查(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.各管路是否無漏氣、漏水現象。',
              '2.機台螺絲是否依規定鎖緊。',
              '3.機台內部是否清潔。',
              '4.各鈑金是否無損傷及無脫漆現象。',
              '5.是否依規定進行退料動作。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>, }
  },
  {
    section: '檢-4',
    items:[
      {
        item: '空車運轉(組裝、組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.各項動作(單動)是否順暢。',
              '2.是否２４小時空車運轉測試，且無異常測試時間：{input} H',
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  {
      section: '檢-5',
      items:[
        {
          item: '警報器(組裝)',
          methods:[
            {
              method: '目視/手動',
              standards: [
                '1.位置是否正確牢固。',
                '2.功能是否正常。',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
    {
      section: '檢-6',
      items:[
        {
          item: '警報器(組裝)',
          methods:[
            {
              method: '目視',
              standards: [
                '1.電源開關是否作動良好。',
                '2.各感應開關、緊急開關是否作動正常。',
              ],
              results: [
                { values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ],
      sign:{type: <input placeholder="人員簽名"/>}
    },
  ]; 

  //===================================================================================================

export  const OtableData8 = [
  {
    section: '2P-3',
    items:[
      {
        item: '出瓶機械手(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1.安裝是否牢固、確實。',
              '2.安裝時料件是否無干涉現象。',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.管路配置是否正確無干涉現象。',
              '5.氣壓缸動作是否無正常'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>, }
  },
  {
    section: '4P-2',
    items:[
      {
        item: '剪澆口組(組裝)',
        methods:[
          {
            method: '目視/手動',
            standards: [
              '1安裝是否牢固、確實。',
              '2.安裝時料件是否無干涉現象。',
              '3.安裝後是否無缺料、損壞、動作不良現象。',
              '4.管路配置是否正確無干涉現象。',
              '5.氣壓缸動作是否無正常。'
            ],
            results: [
              { values: ['是', '否', '是', '否', ] }
            ]
          }
        ],
      }
    ],
    sign:{type: <input placeholder="人員簽名"/>}
  },
  ]; 
