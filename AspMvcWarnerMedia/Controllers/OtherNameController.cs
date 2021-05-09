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
    [RoutePrefix("api/otherName")]
    public class OtherNameController : BaseAPIController
    {
        [HttpGet]
        [Route("getAllByTitle")]
        public HttpResponseMessage GetAllByTitle(int titleId)
        {
            var query = from o in _TitlesDb.OtherName
                        where o.TitleId == titleId
                        select new OtherNameModel
                        {
                            Id = o.Id,
                            TitleNameLanguage = o.TitleNameLanguage,
                            TitleNameType = o.TitleNameType,
                            TitleNameSortable = o.TitleNameSortable,
                            TitleName = o.TitleName,
                            TitleId = o.TitleId,
                        };

            return ToJson(query.AsEnumerable());
        }

        [HttpGet]
        [Route("getAllOtherNames")]
        public HttpResponseMessage GetAllOtherNames()
        {
            var query = from o in _TitlesDb.OtherName
                        select new OtherNameModel
                        {
                            Id = o.Id,
                            TitleNameLanguage = o.TitleNameLanguage,
                            TitleNameType = o.TitleNameType,
                            TitleNameSortable = o.TitleNameSortable,
                            TitleName = o.TitleName,
                            TitleId = o.TitleId,
                        };

            return ToJson(query.AsEnumerable());
        }
    }
}
