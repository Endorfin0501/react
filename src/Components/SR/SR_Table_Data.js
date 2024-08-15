// src/data.js
export const tableData1 = [
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
            }
          ],
        }
      ],
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
              ],
            }
          ],
        }
      ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
      }

  ];
//===================================================================================================
  export  const tableData2 = [
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ]
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
              ]
            }
          ],
        }
      ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
      }

  ];
  
  //===========================================================================================

  export  const tableData3 = [
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ]
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
              ]
            },
              {
                method:'量測(間距)112 +0.10/-0',
                standards:['1.{input}2.{input}3.{input}4.{input}5.{input}\n6.{input}7.{input}8.{input}9.{input}10.{input}\n11.{input}12.{input}'],
                results: [
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
                ]
              },
              {
                method:'量測(垂直度)0.05以內',
                standards:['1.{input}2.{input}3.{input}4.{input}5.{input}\n6.{input}7.{input}8.{input}9.{input}10.{input}\n11.{input}12.{input}'],
                results: [
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
                ]
              }
            ],
        },
        {
          item:'',
          methods:[
            {
              method:'',
              standards:['品保覆驗人員{input}  (CP-QO-227 L機-變節距夾具組檢驗標準作業流程書)'],
              results: [
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
              ]
            }
          ]
        }
      ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
      }
  ];

  //====================================================================================================

  export  const tableData4 = [
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ]
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
              ]
            }
          ],
        }
      ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                results: [
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
      },
  ];  

  //============================================================================================

  export  const tableData5 = [
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ]
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
              ]
            }
          ],
        }
      ]
    },
    {
        section: 'A23',
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
      },
  ];  

  //=================================================================================================

  export  const tableData6 = [
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ]
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
              ]
            }
          ],
        }
      ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
      },
  ];  

  //=====================================================================================================

  export  const tableData7 = [
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
              ]
            }
          ],
        }
      ]
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
                { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否',] }
              ]
            }
          ],
        }
      ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
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
                  { type: <input placeholder="組裝簽名"/>, values: ['是', '否', '是', '否', ] }
                ]
              }
            ],
          }
        ]
      },
  ];  