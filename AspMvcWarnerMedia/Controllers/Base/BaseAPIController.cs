using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Newtonsoft.Json;

using AspMvcWarnerMedia.Data.MsSql;

namespace AspMvcWarnerMedia.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected readonly TitlesEntities _TitlesDb = new TitlesEntities();

        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);

            response.Content = new StringContent(JsonConvert.SerializeObject(obj, Formatting.None,
                new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore, }
            ), Encoding.UTF8, "application/json");

            return response;
        }
    }
}
