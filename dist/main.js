(()=>{"use strict";const t=async function(t){try{let e=await fetch(`https://api.weatherapi.com/v1/current.json?key=7b0154a5196c4135a74133618231404&q=${t}`,{mode:"cors"}),n=await e.json();return[n.location.name,n.location.country,n.current.condition.text,n.current.temp_c]}catch(t){alert(t)}},e=document.querySelector(".submitCity"),n=document.querySelector(".searchCity");let o=document.querySelector(".city"),c=document.querySelector(".country"),r=document.querySelector(".degrees"),u=document.querySelector(".condition"),i="Denia";t(i).then((function(t){let e=t;o.textContent=e[0],c.textContent=e[1],u.textContent=e[2],r.textContent=e[3]})),e.addEventListener("click",(()=>{i=n.value,t(i),t(i).then((function(t){const e=t;o.textContent=e[0],c.textContent=e[1],u.textContent=e[2],r.textContent=e[3]})),n.value=""}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBZUEsUUFmQUEsZUFBOEJDLEdBQzFCLElBQ0ksSUFBSUMsUUFBaUJDLE1BQU0sb0ZBQW9GRixJQUFRLENBQUNHLEtBQU0sU0FDMUhDLFFBQW9CSCxFQUFTSSxPQU1qQyxNQURXLENBSklELEVBQVlFLFNBQVNDLEtBQ3RCSCxFQUFZRSxTQUFTRSxRQUNuQkosRUFBWUssUUFBUUMsVUFBVUMsS0FDbENQLEVBQVlLLFFBQVFHLE9BR3BDLENBQUUsTUFBT0MsR0FDTEMsTUFBTUQsRUFDVixDQUNKLEVDWE1FLEVBQWVDLFNBQVNDLGNBQWMsZUFDdENDLEVBQWFGLFNBQVNDLGNBQWMsZUFDMUMsSUFBSWpCLEVBQU9nQixTQUFTQyxjQUFjLFNBQzlCVCxFQUFVUSxTQUFTQyxjQUFjLFlBQ2pDRSxFQUFVSCxTQUFTQyxjQUFjLFlBQ2pDUCxFQUFZTSxTQUFTQyxjQUFjLGNBRW5DRyxFQUFjLFFBRUUsRUFBZUEsR0FFdkJDLE1BQUssU0FBU0MsR0FDdEIsSUFBSUMsRUFBT0QsRUFDWHRCLEVBQUt3QixZQUFjRCxFQUFLLEdBQ3hCZixFQUFRZ0IsWUFBY0QsRUFBSyxHQUMzQmIsRUFBVWMsWUFBY0QsRUFBSyxHQUM3QkosRUFBUUssWUFBY0QsRUFBSyxFQUMvQixJQUVBUixFQUFhVSxpQkFBaUIsU0FBUyxLQUNuQ0wsRUFBY0YsRUFBV1EsTUFDekIsRUFBZU4sR0FFSyxFQUFlQSxHQUV2QkMsTUFBSyxTQUFTQyxHQUN0QixNQUFNQyxFQUFPRCxFQUNidEIsRUFBS3dCLFlBQWNELEVBQUssR0FDeEJmLEVBQVFnQixZQUFjRCxFQUFLLEdBQzNCYixFQUFVYyxZQUFjRCxFQUFLLEdBQzdCSixFQUFRSyxZQUFjRCxFQUFLLEVBQy9CLElBQ0FMLEVBQVdRLE1BQVEsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT03YjAxNTRhNTE5NmM0MTM1YTc0MTMzNjE4MjMxNDA0JnE9JHtjaXR5fWAsIHttb2RlOiAnY29ycyd9KVxuICAgICAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGxldCBjaXR5TmFtZSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgbGV0IGNvdW50cnkgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5XG4gICAgICAgIGxldCBjb25kaXRpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0XG4gICAgICAgIGxldCB0ZW1wQyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIGxldCBpbmZvID0gW2NpdHlOYW1lLCBjb3VudHJ5LCBjb25kaXRpb24sIHRlbXBDXVxuICAgICAgICByZXR1cm4gaW5mb1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGEiLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vbW9kdWxlcy9nZXREYXRhXCJcblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdENpdHknKVxuY29uc3Qgc2VhcmNoQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hDaXR5JylcbmxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKVxubGV0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeScpXG5sZXQgZGVncmVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWdyZWVzJylcbmxldCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uJylcblxubGV0IGN1cnJlbnRDaXR5ID0gJ0RlbmlhJ1xuXG5jb25zdCB3ZWF0aGVySW5mbyA9IGdldFdlYXRoZXJEYXRhKGN1cnJlbnRDaXR5KVxuXG53ZWF0aGVySW5mby50aGVuKGZ1bmN0aW9uKGRhdGEpeyBcbiAgICBsZXQgaW5mbyA9IGRhdGFcbiAgICBjaXR5LnRleHRDb250ZW50ID0gaW5mb1swXVxuICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSBpbmZvWzFdXG4gICAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gaW5mb1syXVxuICAgIGRlZ3JlZXMudGV4dENvbnRlbnQgPSBpbmZvWzNdXG59KVxuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3VycmVudENpdHkgPSBzZWFyY2hDaXR5LnZhbHVlXG4gICAgZ2V0V2VhdGhlckRhdGEoY3VycmVudENpdHkpXG5cbiAgICBjb25zdCB3ZWF0aGVySW5mbyA9IGdldFdlYXRoZXJEYXRhKGN1cnJlbnRDaXR5KVxuXG4gICAgd2VhdGhlckluZm8udGhlbihmdW5jdGlvbihkYXRhKXsgXG4gICAgICAgIGNvbnN0IGluZm8gPSBkYXRhXG4gICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSBpbmZvWzBdXG4gICAgICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSBpbmZvWzFdXG4gICAgICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGluZm9bMl1cbiAgICAgICAgZGVncmVlcy50ZXh0Q29udGVudCA9IGluZm9bM11cbiAgICB9KVxuICAgIHNlYXJjaENpdHkudmFsdWUgPSAnJ1xufSlcblxuXG4iXSwibmFtZXMiOlsiYXN5bmMiLCJjaXR5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJ3ZWF0aGVyRGF0YSIsImpzb24iLCJsb2NhdGlvbiIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVudCIsImNvbmRpdGlvbiIsInRleHQiLCJ0ZW1wX2MiLCJlcnJvciIsImFsZXJ0Iiwic2VhcmNoQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoQ2l0eSIsImRlZ3JlZXMiLCJjdXJyZW50Q2l0eSIsInRoZW4iLCJkYXRhIiwiaW5mbyIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==