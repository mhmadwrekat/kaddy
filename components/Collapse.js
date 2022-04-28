import React from 'react';
import useCollapse from 'react-collapsed';
const Collapse = () => {
    const CollapsibleOne = () => {
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
        return (
          <div className="collapsible">
              <div className="text-center text-teal-600 text-xl font-bold lg:text-2xl hover:scale-125 cursor-alias my-10" {...getToggleProps()}>
                  {isExpanded ? 
                  'نبذة عن رؤيتنا' 
                  : 
                  '⏬ نبذة عن رؤيتنا'}
              </div>
              <div {...getCollapseProps()}>
                  <div className="text-center text-teal-600 text-lg font-bold my-5">
                      رؤيتنا هي أن نصبح المزود الرائد لزيت الأظافر الطبيعي
                       عن طريق الانترنت من اجل تقديم أفضل وأبسط تجربة لعملائنا
                  </div>
              </div>
          </div>
          );
        }
        const CollapsibleTwo = () => {
          const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
          return (
            <div className="collapsible">
                <div className="text-center text-teal-600 text-xl lg:text-2xl my-10 font-bold hover:scale-125 cursor-alias" {...getToggleProps()}>

                    {isExpanded ? 
                    'نبذة عن خدماتنا' 
                    :
                     '⏬ نبذة عن خدماتنا '}
                </div>
                <div {...getCollapseProps()}>
                    <div className="text-center text-teal-600 text-lg font-bold my-5">
                  زيت كادي هو أفضل خدمة إلكترونية لزيت الأظافر الطبيعي في المملكة 
                  الأردنية الهاشميةونحن نغطي التسليم في المملكة
      
                    </div>
                </div>
            </div>
            );
          }
          const CollapsibleThree = () => {
            const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
            return (
              <div className="collapsible">
                  <div className="hover:scale-125 cursor-alias text-center text-teal-600 text-xl lg:text-2xl my-10 font-bold" {...getToggleProps()}>
                      {isExpanded ?
                       'نبذة عن زيت كادي' 
                       :
                        '⏬ نبذة عن زيت كادي'}
                  </div>
                  <div {...getCollapseProps()}>
                      <div className="text-center text-teal-600 text-lg font-bold my-5">
                    شركة زيت كادي هي شركة رائدة في مجال العناية بالأظاففر وزيوت 
                    الأظافر الطبيعي, نقوم بترويج منتجات زيت كادي في المملكة الأردنية الهاشمية
      
                      </div>
                  </div>
              </div>
              );
            }
  return (
<>
<CollapsibleOne/>
<CollapsibleTwo/>
<CollapsibleThree/>
</>
    )
}
export default Collapse