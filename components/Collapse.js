import React from 'react';
import useCollapse from 'react-collapsed';
const Collapse = () => {
        const CollapsibleOne = () => {
          const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
          return (
            <div className='collapsible'>
            <div className="mx-20 lg:mx-96 md:mx-60 lg:px-20">
<div className="px-3 py-1.5 my-10 text-xl font-bold text-center text-white bg-teal-700 border-teal-500 rounded-xl lg:text-2xl hover:scale-110 cursor-alias" {...getToggleProps()}>                  {isExpanded ? 
                    'نبذة عن خدماتنا' 
                    :
                     'نبذة عن خدماتنا '}
                </div>
                </div>
                <div {...getCollapseProps()}>
                    <div className="mx-5 my-5 text-base font-bold text-center text-teal-600">
                  زيت كادي هو أفضل خدمة إلكترونية لزيت الأظافر الطبيعي في المملكة 
                  الأردنية الهاشمية ونحن نغطي التسليم في المملكة
                    </div>
                </div>
            </div>
            );
          }
          const CollapsibleTwo = () => {
            const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
            return (
              <div className='collapsible'>
            <div className="mx-20 lg:mx-96 md:mx-60 lg:px-20">
<div className="px-3 py-1.5 my-10 text-xl font-bold text-center text-white bg-teal-700 border-teal-500 rounded-xl lg:text-2xl hover:scale-110 cursor-alias" {...getToggleProps()}>
                      {isExpanded ?
                       'نبذة عن زيت كادي' 
                       :
                        ' نبذة عن زيت كادي'}
                  </div>
              </div>
                  <div {...getCollapseProps()}>
                      <div className="mx-5 my-5 text-base font-bold text-center text-teal-600">
                    شركة زيت كادي هي شركة رائدة في مجال العناية بالأظافر وزيوت 
                    الأظافر الطبيعية, نقوم بترويج منتجات زيت كادي في المملكة الأردنية الهاشمية
                      </div>
                  </div>
                  </div>
              );
            }
            
  return (
<>
<div>
<div className="mx-20 lg:mx-96 md:mx-60 lg:px-20">
<div className="px-3 py-1.5 my-10 text-xl font-bold text-center text-white bg-teal-700 border-teal-500 rounded-xl lg:text-2xl hover:scale-110 cursor-alias">
                 نبذة عن رؤيتنا    
</div>
</div>
              <div>
                  <div className="mx-5 my-5 text-base font-bold text-center text-teal-600">
                      رؤيتنا هي أن نصبح المزود الرائد لزيت الأظافر الطبيعي
                       عن طريق الانترنت من اجل تقديم أفضل وأبسط تجربة لعملائنا
                  </div>
              </div>
          </div>
<CollapsibleOne/>
<CollapsibleTwo/>
</>
    )
}
export default Collapse