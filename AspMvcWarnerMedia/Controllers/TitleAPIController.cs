using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AspMvcWarnerMedia.Models;
using AspMvcWarnerMedia.Data.MsSql;

namespace AspMvcWarnerMedia.Controllers
{
    [RoutePrefix("api/title")]
    public class TitleAPIController : BaseAPIController
    {

#if DISABLED

        public HttpResponseMessage Get()
        {
            return ToJson(_TitlesDb.Title.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody] Title value)
        {
            _TitlesDb.Title.Add(value);

            return ToJson(_TitlesDb.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody] Title value)
        {
            _TitlesDb.Entry(value).State = System.Data.Entity.EntityState.Modified;

            return ToJson(_TitlesDb.SaveChanges());
        }

        public HttpResponseMessage Delete(int id)
        {
            _TitlesDb.Title.Remove(_TitlesDb.Title.FirstOrDefault(x => x.TitleId == id));

            return ToJson(_TitlesDb.SaveChanges());
        }

#else

        [HttpGet]
        [Route("getAllTitleNames")]
        public HttpResponseMessage GetAllTitleNames()
        {
            var query = from o in _TitlesDb.Title
                        select o.TitleName;

            return ToJson(query.AsEnumerable());
        }

        [HttpGet]
        [Route("gettitles")]
        public HttpResponseMessage GetTitles()
        {
            var query = from o in _TitlesDb.Title
                        select new TitleModel
                        {
                            TitleId = o.TitleId,
                            TitleName = o.TitleName,
                            TitleNameSortable = o.TitleNameSortable,
                            TitleTypeId = o.TitleTypeId,
                            ReleaseYear = o.ReleaseYear,
                            ProcessedDateTimeUTC = o.ProcessedDateTimeUTC,
                        };

            return ToJson(query.AsEnumerable());
        }

        [HttpPost]
        [Route("createtitle")]
        public HttpResponseMessage Post([FromBody] Title value)
        {
            _TitlesDb.Title.Add(value);

            return ToJson(_TitlesDb.SaveChanges());
        }

        [HttpGet, HttpPut]
        [Route("updatetitle")]
        public HttpResponseMessage Put(int id, [FromBody] Title value)
        {
            _TitlesDb.Entry(value).State = System.Data.Entity.EntityState.Modified;

            return ToJson(_TitlesDb.SaveChanges());
        }

        [HttpGet, HttpDelete]
        [Route("deletetitle")]
        public HttpResponseMessage Delete(int titleId)
        {
            _TitlesDb.Title.Remove(_TitlesDb.Title.FirstOrDefault(x => x.TitleId == titleId));

            return ToJson(_TitlesDb.SaveChanges());
        }
#endif
    }
}
